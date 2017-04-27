<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

$factory->define(\App\Entities\ShoppingCart::class, function (Faker\Generator $faker) {
    $dateTimeThisYear = $faker->dateTimeThisYear;
    return [
        'active' => false, // default is false
        'created_at' => $dateTimeThisYear,
        'updated_at' => $faker->dateTimeBetween($dateTimeThisYear, 'now')
    ];
});

//TODO: create active shopping cart state here! only 1 active shopping cart at any time

$factory->state(\App\Entities\ShoppingCart::class, 'active', function (\Faker\Generator $faker) {
    return [
        'active' => true,
        'user_id' => $faker->numberBetween(1, config('factory.USER_AMOUNT') + 1 + config('factory.MANAGER_AMOUNT'))
        //all user always have one active shopping cart
    ];
});

$factory->state(\App\Entities\ShoppingCart::class, 'relation', function (\Faker\Generator $faker) {
    return [
        'user_id' => $faker->numberBetween(1, config('factory.USER_AMOUNT') + 1 + config('factory.MANAGER_AMOUNT'))
    ];
});