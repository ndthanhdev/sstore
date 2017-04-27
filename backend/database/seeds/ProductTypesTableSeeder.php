<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\ProductType;
use Illuminate\Database\Seeder;

class ProductTypesTableSeeder extends Seeder {

    public function run() {
        factory(ProductType::class, config('factory.PRODUCT_TYPE_AMOUNT'))->create();
    }
}