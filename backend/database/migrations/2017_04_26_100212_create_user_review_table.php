<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserReviewTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('user_review', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('liked')->default(false);
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('review_id');
        });
        Schema::table('user_review', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('review_id')->references('id')->on('reviews');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('user_review');
    }
}
