<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(App\Entities\CustomAttribute::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->hexColor,
        'value' => $faker->word,
    ];
});

$factory->state(App\Entities\CustomAttribute::class, 'relation', function (Faker\Generator $faker) {
    return [
        'product_id' => $faker->numberBetween(2, config('factory.PRODUCT_AMOUNT'))
    ];
});