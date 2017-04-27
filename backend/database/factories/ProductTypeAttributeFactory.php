<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\ProductTypeAttribute::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->hexColor,
    ];
});

$factory->state(\App\Entities\ProductTypeAttribute::class, 'relation', function (\Faker\Generator $faker) {
    return [
        'product_type_id' => $faker->numberBetween(1, config('factory.PRODUCT_TYPE_AMOUNT'))
    ];
});