<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\ProductVariationValue;
use Illuminate\Database\Seeder;

class ProductVariationValuesTableSeeder extends Seeder {

    public function run() {
        factory(ProductVariationValue::class, config('factory.PRODUCT_VARIATION_VALUE_AMOUNT'))->states('relation')->create();
    }
}