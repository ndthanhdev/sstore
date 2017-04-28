<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\ProductType;
use App\Entities\ProductTypeAttribute;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ProductTypeAttributesTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();
        ProductType::all()->each(function ($productType, $key) use ($faker) {
            $numberOfProductTypeAttribute = $faker->numberBetween(1, config('factory.MAX_ATTRIBUTE_PER_PRODUCT_TYPE'));
            for ($i = 0; $i < $numberOfProductTypeAttribute; $i++)
                factory(ProductTypeAttribute::class)->create([
                    'product_type_id' => $productType
                ]);
        });
    }
}