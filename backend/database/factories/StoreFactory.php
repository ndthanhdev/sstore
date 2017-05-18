<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\Store::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->city,
        'address' => $faker->address,
        //TODO: collect real latitude and longitude
        'latitude' => $faker->latitude($min = 10.7, $max = 10.9),
        'longitude' => $faker->longitude($min = 106.6, $max = 106.9),
        'primary' => false
    ];
});

$factory->state(\App\Entities\Store::class, 'primary', function (\Faker\Generator $faker) {
    return [
        'primary' => true
    ];
});