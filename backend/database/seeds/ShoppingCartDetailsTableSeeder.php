<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\ShoppingCart;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ShoppingCartDetailsTableSeeder extends Seeder {
    //TODO: one shopping cart can have many products
    public function run() {
        $shoppingCarts = ShoppingCart::all();
        foreach ($shoppingCarts as $shoppingCart) {
            $faker = Factory::create();
            for ($i = 0; $i < $faker->numberBetween(1, 4); $i++)
                $shoppingCart->details()->attach(
                    $faker->numberBetween(1, config('factory.PRODUCT_AMOUNT') * (config('factory.MAX_PRODUCT_VARIANT_PER_PRODUCT') - 1)),
                    ['quantity' => $faker->numberBetween(1, 5)]);
        }
    }
}