<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\StoreProductVariant::class, function (Faker\Generator $faker) {
    return [
        'in_stock' => $faker->numberBetween(0, 20),
        'price' => $faker->numberBetween(1, 900) * 1000,
    ];
});