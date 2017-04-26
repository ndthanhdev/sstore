<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductVariationValuesTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('product_variation_values', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('in_stock');
            $table->decimal('price');
            $table->unsignedInteger('store_product_id');
        });
        Schema::table('product_variation_values', function (Blueprint $table) {
            $table->foreign('store_product_id')->references('id')->on('store_product');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('product_variation_values');
    }
}
