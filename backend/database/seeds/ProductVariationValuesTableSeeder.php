<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\ProductVariationValue;
use App\Entities\StoreProduct;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ProductVariationValuesTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();
        $storeProducts = StoreProduct::all();

        foreach ($storeProducts as $storeProduct) {
            $numberOfProductVariationValues = $faker->numberBetween(1, config('factory.MAX_PRODUCT_VARIATION_VALUES_PER_STORE_PRODUCT'));
            //at lease 1 product variation value in a store product
            factory(ProductVariationValue::class)->create([
                'store_product_id' => $storeProduct->id,
                'default' => true
            ]);
            for ($i = 1; $i < $numberOfProductVariationValues; $i++) {
                factory(ProductVariationValue::class)->create([
                    'store_product_id' => $storeProduct->id
                ]);
            }
        }

    }
}