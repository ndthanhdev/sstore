<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\ShoppingCart;
use App\Entities\StoreProductVariant;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ShoppingCartDetailsTableSeeder extends Seeder {
    //TODO: one shopping cart can have many products
    public function run() {
        $shoppingCarts = ShoppingCart::all();
        $storeProductVariantCount = StoreProductVariant::all()->count();
        foreach ($shoppingCarts as $shoppingCart) {
            $faker = Factory::create();
            for ($i = 0; $i < $faker->numberBetween(1, 4); $i++)
                $shoppingCart->storeProductVariant()->attach(
                    $faker->numberBetween(1, $storeProductVariantCount - 1),
                    [
                        'quantity' => $faker->numberBetween(1, 5),
                        'price' => $faker->numberBetween(1, 900) * 1000,
                    ]);
        }
    }
}