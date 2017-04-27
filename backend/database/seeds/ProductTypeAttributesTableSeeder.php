<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\ProductTypeAttributes;
use Illuminate\Database\Seeder;

class ProductTypeAttributesTableSeeder extends Seeder {

    public function run() {
        factory(ProductTypeAttributes::class, config('factory.PRODUCT_TYPE_ATTRIBUTE_AMOUNT'))->states(['relation'])->create();
    }
}