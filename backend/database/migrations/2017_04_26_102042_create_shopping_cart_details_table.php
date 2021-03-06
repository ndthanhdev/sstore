<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShoppingCartDetailsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('shopping_cart_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('quantity');
            $table->string('price');
            $table->unsignedInteger('shopping_cart_id');
            $table->unsignedInteger('store_product_variant_id');
        });
        Schema::table('shopping_cart_details', function (Blueprint $table) {
            $table->foreign('shopping_cart_id')->references('id')->on('shopping_carts');
            $table->foreign('store_product_variant_id')->references('id')->on('store_product_variant');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('shopping_cart_details');
    }
}
