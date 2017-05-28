<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\ProductVariant;
use App\Entities\Store;
use Faker\Factory;
use Illuminate\Database\Seeder;

class StoreProductVariantTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();
        $stores = Store::all();
        $productVariants = ProductVariant::all();

        foreach ($productVariants as $productVariant) {
            foreach ($stores as $store) {
                $productVariant->stores()->attach($store->id, [
                    'in_stock' => $faker->numberBetween(1, 60),
                    'price' => $faker->numberBetween(1, 900) * 1000
                ]);
            }
        }
    }
}