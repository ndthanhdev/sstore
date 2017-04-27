<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\User;
use Illuminate\Database\Seeder;

class UserReviewTableSeeder extends Seeder {

    public function run() {
        $users = User::all();

        foreach ($users as $user) {
            $reviewIds = $this->generateReviewIds();
            foreach ($reviewIds as $reviewId) {
                $user->interactedReviews()->attach($reviewId, ['liked' => (bool)random_int(0, 1)]);
            }
        }
    }

    private function generateReviewIds() {
        return generateRandomUniqueSequence(
            random_int(1, config('factory.REVIEW_AMOUNT')),
            ['from' => 1, 'to' => config('factory.REVIEW_AMOUNT')]
        );
    }
}