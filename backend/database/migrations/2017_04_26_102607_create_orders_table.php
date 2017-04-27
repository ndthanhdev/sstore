<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code')->unique();
            $table->integer('rating')->nullable();
            $table->string('comment')->nullable();
            $table->integer('state');
            $table->timestamps();
            $table->unsignedInteger('shopping_cart_id');
        });
        Schema::table('orders', function (Blueprint $table) {
            $table->foreign('shopping_cart_id')->references('id')->on('shopping_carts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('orders');
    }
}
