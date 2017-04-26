<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Entities\User::class, function (Faker\Generator $faker) {
    $dateTimeThisYear = $faker->dateTimeThisYear;
    return [
        'full_name' => $faker->name,
        'dob' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'tel' => $faker->phoneNumber,
        'address' => $faker->address,
        'email' => $faker->email,
        'gender' => $faker->randomElement(['Male', 'Female', 'Other']),
        'created_at' => $dateTimeThisYear,
        'updated_at' => $dateTimeThisYear
    ];
});
