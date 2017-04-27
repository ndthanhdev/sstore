<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Account;
use Illuminate\Database\Seeder;

class AccountsTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        factory(Account::class)->states(['admin'])->create();
        factory(Account::class, config('factory.USER_AMOUNT'))->states(['relation'])->create();
        factory(Account::class, config('factory.MANAGER_AMOUNT'))->states(['manager'])->create();
    }
}