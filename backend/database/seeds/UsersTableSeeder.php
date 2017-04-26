<?php
/**
 * Created by vunguyenhung on 4/26/17
 */

namespace database\seeds;

use App\Entities\User;
use Illuminate\Database\Seeder;

//NOTE: run `composer dump-autoload` if UsersTableSeeder not found

class UsersTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        factory(User::class, config('factory.USER_AMOUNT'))->create();
    }
}