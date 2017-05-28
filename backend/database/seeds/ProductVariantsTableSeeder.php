<?php
/**
 * Created by vunguyenhung on 5/28/17
 */

namespace database\seeds;

use App\Entities\Product;
use App\Entities\ProductVariant;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ProductVariantsTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();
        Product::all()->each(function ($product, $key) use ($faker) {
            factory(ProductVariant::class)->create([
                'default' => true,
                'product_id' => $product->id
            ]);

            $numberOfVariants = $faker->numberBetween(1, config('factory.MAX_PRODUCT_VARIANT_PER_PRODUCT'));
            factory(ProductVariant::class, $numberOfVariants)->create([
                'product_id' => $product->id
            ]);
        });
    }


}