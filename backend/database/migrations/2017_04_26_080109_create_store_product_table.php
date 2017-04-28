<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoreProductTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('store_product', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('in_stock_default');
            $table->decimal('price_default');
            $table->boolean('primary')->default(false);
            $table->unsignedInteger('store_id');
            $table->unsignedInteger('product_id');
        });
        Schema::table('store_product', function (Blueprint $table) {
            $table->foreign('store_id')->references('id')->on('stores');
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('store_product');
    }
}
