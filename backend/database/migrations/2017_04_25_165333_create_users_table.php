<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('full_name'); //auto generate with guest
            $table->date('dob')->nullable();
            $table->string('tel')->nullable();
            $table->string('address')->nullable();
            $table->string('email')->unique();
            $table->integer('gender'); // 0 - male / 1 - female / 2 - other
            $table->string('avatar');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('users');
    }
}
