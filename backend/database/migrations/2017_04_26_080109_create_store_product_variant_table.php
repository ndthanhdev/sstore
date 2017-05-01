<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoreProductVariantTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('store_product_variant', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('price');
            $table->integer('in_stock');
            $table->unsignedInteger('store_id')->nullable();
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('product_variant_id')->nullable();
        });
        Schema::table('store_product_variant', function (Blueprint $table) {
            $table->foreign('store_id')->references('id')->on('stores');
            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('product_variant_id')->references('id')->on('product_variants');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('store_product_variant');
    }
}
