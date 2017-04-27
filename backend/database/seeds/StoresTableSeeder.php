<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Store;
use Illuminate\Database\Seeder;

class StoresTableSeeder extends Seeder {
    public function run() {
        factory(Store::class, config('factory.MANAGER_AMOUNT'))->states(['relation'])->create();
    }
}