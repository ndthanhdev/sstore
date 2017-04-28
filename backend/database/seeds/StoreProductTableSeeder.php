<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Product;
use App\Entities\Store;
use Faker\Factory;
use Illuminate\Database\Seeder;

class StoreProductTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();
        $stores = Store::all();
        $products = Product::all();
        foreach ($products as $product) {
            foreach ($stores as $store) {
                if ($faker->optional(0.8, false)->randomDigit)
                    $product->stores()->attach($store->id);
            }
        }
    }
}