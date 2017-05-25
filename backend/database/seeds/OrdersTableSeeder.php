<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\Order;
use App\Entities\ShoppingCart;
use Faker\Factory;
use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();
        $inactiveShoppingCarts = ShoppingCart::where('active', false)->get();
        foreach ($inactiveShoppingCarts as $inactiveShoppingCart) {
            $creationTime = $faker->dateTimeBetween($inactiveShoppingCart->updated_at, 'now');
            $isDone = is_null($faker->optional(0.1)->numberBetween(0, 1));
            factory(Order::class)->create([
                'shopping_cart_id' => $inactiveShoppingCart->id,
                'created_at' => $creationTime,
                'updated_at' => $faker->dateTimeBetween($creationTime, 'now'),
                'state' => $isDone ? 2 : $faker->numberBetween(0, 1)
            ]);
        }
    }
}