<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Device;
use App\Entities\StoreProductVariant;
use Illuminate\Database\Seeder;

class DevicesTableSeeder extends Seeder {

    public function run() {
        StoreProductVariant::all()->each(function ($storeProductVariant, $key) {
            factory(Device::class)->create(['store_product_variant_id' => $storeProductVariant->id]);
        });

    }

}