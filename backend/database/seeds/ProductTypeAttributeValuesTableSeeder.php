<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\ProductType;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ProductTypeAttributeValuesTableSeeder extends Seeder {

    public function run() {
        $faker = Factory::create();
        $productTypes = ProductType::all();

        foreach ($productTypes as $productType) {
            $productTypeAttributes = $productType->productTypeAttributes;
            $products = $productType->products; // type: collection || foreach ($user->roles as $role)
            foreach ($products as $product)
                foreach ($productTypeAttributes as $productTypeAttribute)
                    $product->productTypeAttributeValues()->attach($productTypeAttribute->id, ['value' => $faker->word]);
        };

//        get product type
//            get all products
//            get all product attributes
//            attach
    }
}