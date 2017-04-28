<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoresTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('stores', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->string('address')->nullable();
            $table->string('longitude');
            $table->string('latitude');
            $table->boolean('primary')->default(false);
            $table->unsignedInteger('manager_id');
        });
        Schema::table('stores', function (Blueprint $table) {
            $table->foreign('manager_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('stores');
    }
}
