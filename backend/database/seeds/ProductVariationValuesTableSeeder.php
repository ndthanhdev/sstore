<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace database\seeds;


use App\Entities\ProductVariant;
use App\Entities\ProductVariationValue;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ProductVariationValuesTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();

        ProductVariant::all()->each(function ($productVariant, $key) use ($faker) {

            //each product variant has at lease 01 product variation values
            factory(ProductVariationValue::class)->create([
                'product_variant_id' => $productVariant->id
            ]);


            $numberOfVariantValues = $faker->numberBetween(1, config('factory.MAX_PRODUCT_VARIATION_VALUES_PER_PRODUCT_VARIANT'));
            for ($i = 1; $i < $numberOfVariantValues; $i++) {
                factory(ProductVariationValue::class)->create([
                    'product_variant_id' => $productVariant->id
                ]);
            }
        });

    }
}