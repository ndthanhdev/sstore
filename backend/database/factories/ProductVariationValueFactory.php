<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

$factory->define(\App\Entities\ProductVariationValue::class, function (Faker\Generator $faker) {
    return [
        'in_stock' => $faker->numberBetween(0, 20),
        'price' => $faker->numberBetween(1, 900) * 1000,
    ];
});

$factory->state(\App\Entities\ProductVariationValue::class, 'relation', function (\Faker\Generator $faker) {
    return [
        'store_product_id' => $faker->numberBetween(1, config('factory.PRODUCT_AMOUNT'))
    ];
});