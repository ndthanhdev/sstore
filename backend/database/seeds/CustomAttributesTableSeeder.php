<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\CustomAttribute;
use Illuminate\Database\Seeder;

class CustomAttributesTableSeeder extends Seeder {

    public function run() {
        factory(CustomAttribute::class, config('factory.CUSTOM_ATTRIBUTE'))->states(['relation'])->create();
    }

}