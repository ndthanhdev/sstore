<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder {

    public function run() {
        factory(Product::class, config('factory.PRODUCT_AMOUNT'))->states(['relation'])->create();
    }
}