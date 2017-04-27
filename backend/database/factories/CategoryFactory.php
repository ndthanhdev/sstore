<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\Category::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->streetName,
        'description' => $faker->sentence
    ];
});


$factory->state(\App\Entities\Category::class, 'relation', function (Faker\Generator $faker) {
    return [
        'catalog_id' => $faker->numberBetween(1, config('factory.CATALOG_AMOUNT'))
    ];
});