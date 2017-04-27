<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\Review;
use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder {
    public function run() {
        factory(Review::class, config('factory.REVIEW_AMOUNT'))->states('relation')->create();
    }
}