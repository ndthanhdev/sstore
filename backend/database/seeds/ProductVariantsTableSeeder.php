<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\ProductVariant;
use Illuminate\Database\Seeder;

class ProductVariantsTableSeeder extends Seeder {

    public function run() {
        factory(ProductVariant::class, config('factory.PRODUCT_VARIANT_VALUE'))->states('relation')->create();
        //each product variation values have at lease one product variants
    }
}