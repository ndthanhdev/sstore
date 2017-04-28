<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

$factory->define(\App\Entities\ProductVariant::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->hexColor,
        'value' => $faker->word,
    ];
});

$factory->state(\App\Entities\ProductVariant::class, 'relation', function (\Faker\Generator $faker) {
    return [
        'product_variation_value_id' => $faker->numberBetween(1, config('factory.PRODUCT_VARIATION_VALUE_AMOUNT'))
    ];
});