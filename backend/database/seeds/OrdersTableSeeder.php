<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\Order;
use App\Entities\ShoppingCart;
use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder {

    public function run() {
        $inactiveShoppingCarts = ShoppingCart::where('active', false)->get();
        foreach ($inactiveShoppingCarts as $inactiveShoppingCart) {
            factory(Order::class)->create([
                'shopping_cart_id' => $inactiveShoppingCart->id
            ]);
        }
    }
}