<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\ProductType::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->colorName,
        'default_unit' => $faker->currencyCode,
    ];
});