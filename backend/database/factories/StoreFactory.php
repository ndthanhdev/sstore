<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\Store::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->city,
        'address' => $faker->address,
        //TODO: collect real latitude and longitude
        'latitude' => $faker->latitude,
        'longitude' => $faker->longitude
    ];
});

$factory->state(\App\Entities\Store::class, 'relation', function (\Faker\Generator $faker) {
    $fakerAlt = Faker\Factory::create();
    return [
        'manager_id' => $fakerAlt->unique()->numberBetween(config('factory.USER_AMOUNT') + 1, config('factory.USER_AMOUNT') + 1 + config('factory.MANAGER_AMOUNT'))
    ];
});