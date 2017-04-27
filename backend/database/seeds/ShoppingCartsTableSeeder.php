<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\ShoppingCart;
use Illuminate\Database\Seeder;

class ShoppingCartsTableSeeder extends Seeder {

    public function run() {
        factory(ShoppingCart::class, config('factory.SHOPPING_CART_AMOUNT'))->states('relation')->create();

        // by default, each user have one (any only one) active shopping cart.
        for ($i = 1; $i <= config('factory.TOTAL_ACCOUNT_AMOUNT'); $i++)
            factory(ShoppingCart::class)->create([
                'active' => true,
                'user_id' => $i
            ]);

    }
}