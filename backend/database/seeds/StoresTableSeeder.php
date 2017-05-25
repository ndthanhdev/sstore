<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Account;
use App\Entities\Store;
use Illuminate\Database\Seeder;

class StoresTableSeeder extends Seeder {
    public function run() {
        $managerAccounts = Account::where('role', 1)->get();
        factory(Store::class)->states(['primary'])->create([
            'manager_id' => $managerAccounts->first()->user->id
        ]);

        foreach ($managerAccounts->slice(1) as $account) {
            factory(Store::class)->create([
                'manager_id' => $account->user->id
            ]);
        }
    }
}