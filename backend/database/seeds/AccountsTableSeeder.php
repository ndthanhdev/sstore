<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Account;
use App\Entities\User;
use Illuminate\Database\Seeder;

class AccountsTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $users = User::all();
        factory(Account::class)->states(['admin'])->create(['user_id' => $users->first()->id]);

        $users->slice(1, config('factory.USER_AMOUNT'))->each(function ($user, $key) {
            factory(Account::class)->create(['user_id' => $user->id]);
        });

        $users->slice(1 + config('factory.USER_AMOUNT'), config('factory.MANAGER_AMOUNT'))->each(function ($user, $key) {
            factory(Account::class)->states(['manager'])->create([
                'user_id' => $user->id
            ]);
        });
    }
}