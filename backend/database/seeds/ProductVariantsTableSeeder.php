<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\ProductVariant;
use App\Entities\ProductVariationValue;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ProductVariantsTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();
        $productVariationValues = ProductVariationValue::all();
        foreach ($productVariationValues as $productVariationValue) {
            $numberOfProductVariant = $faker->numberBetween(1, config('factory.MAX_PRODUCT_VARIANT_VALUE_PER_PRODUCT_VARIATION_VALUE'));
            // at lease 1 product variants in a product variation values
            factory(ProductVariant::class)->create([
                'product_variation_value_id' => $productVariationValue->id
            ]);

            for ($i = 1; $i < $numberOfProductVariant; $i++) {
                factory(ProductVariant::class)->create([
                    'product_variation_value_id' => $productVariationValue->id
                ]);
            }
        }
        //each product variation values have at lease one product variants
    }
}