<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Product;
use App\Entities\ProductVariant;
use App\Entities\Store;
use Faker\Factory;
use Illuminate\Database\Seeder;

class StoreProductVariantTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();
        $stores = Store::all();
        $products = Product::all();

        foreach ($products as $product) {
//            default variant
            $createdDefaultVariant = factory(ProductVariant::class)->create(['default' => true]);

            $numberOfVariants = $faker->numberBetween(1, config('factory.MAX_PRODUCT_VARIANT_PER_PRODUCT'));
            $createdVariants = factory(ProductVariant::class, $numberOfVariants)->create();

            foreach ($stores as $store) {

                //each product has at lease 01 variant (default)
                $product->variants()->attach($createdDefaultVariant->id, [
                    'store_id' => $store->id,
                    'in_stock' => $faker->numberBetween(1, 60),
                    'price' => $faker->numberBetween(1, 900) * 1000
                ]);

                foreach ($createdVariants as $createdVariant) {

                    if ($faker->optional(0.8, false)->randomDigit) {
                        $product->variants()->attach($createdVariant->id, [
                            'store_id' => $store->id,
                            'in_stock' => $faker->numberBetween(1, 60),
                            'price' => $faker->numberBetween(1, 900) * 1000
                        ]);
                    }

                }

            }
        }
    }
}