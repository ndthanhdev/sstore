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
            $primary = true;
            foreach ($stores as $store) {
                if ($faker->optional(0.6, false)->randomDigit) {
                    $product->stores()->attach($store->id, [
                        'in_stock_default' => $faker->numberBetween(0, 50),
                        'price_default' => $faker->numberBetween(1, 900) * 1000,
                        'primary' => $primary
                    ]);
                    $primary = false;
                }
            }

        }
    }
}