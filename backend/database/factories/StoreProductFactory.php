<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\StoreProduct::class, function (Faker\Generator $faker) {
    return [
        'in_stock_default' => $faker->numberBetween($min = 0, $max = 50),
        'price_default' => $faker->numberBetween($min = 1, $max = 900) * 1000,
    ];
});