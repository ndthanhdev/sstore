<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

$factory->define(\App\Entities\Order::class, function (Faker\Generator $faker) {
    $dateTimeThisYear = $faker->dateTimeThisYear;
    $isCommented = is_null($faker->optional(0.6)->numberBetween(0, 1));
    $isOnline = is_null($faker->optional(0.6)->numberBetween(0, 1));
    return [
        'code' => $faker->unique()->regexify('SSORD[0-9]{10}'),
        'rating' => $isCommented ? $faker->numberBetween(1, 5) : null,
        'comment' => $isCommented ? $faker->sentence() : null,
        'address' => $isOnline ? $faker->address : null,
        'latitude' => $isOnline ? $faker->latitude($min = 10.7, $max = 10.9) : null,
        'longitude' => $isOnline ? $faker->longitude($min = 106.6, $max = 106.9) : null,
        'tel' => $isOnline ? $faker->phoneNumber : null,
        'state' => 2, // default is DONE!
        'created_at' => $dateTimeThisYear,
        'updated_at' => $faker->dateTimeBetween($dateTimeThisYear)
    ];
});