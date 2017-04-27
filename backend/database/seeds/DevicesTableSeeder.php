<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Device;
use Illuminate\Database\Seeder;

class DevicesTableSeeder extends Seeder {

    public function run() {
        factory(Device::class, config('factory.DEVICE_AMOUNT'))->states(['relation'])->create();
    }

}