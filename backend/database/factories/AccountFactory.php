<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

use Illuminate\Support\Facades\Hash;

$factory->define(App\Entities\Account::class, function (Faker\Generator $faker) {
    return [
        'username' => $faker->userName,
        'password' => Hash::make('sstore'),
        'IP' => $faker->ipv4,
        'last_login' => $faker->dateTimeThisYear,
        'role' => 1,
    ];
});

$factory->state(App\Entities\Account::class, 'relation', function (Faker\Generator $faker) {
    return [
        'user_id' => $faker->unique()->numberBetween(2, config('factory.USER_AMOUNT') + 1),
    ];
});

$factory->state(App\Entities\Account::class, 'manager', function ($faker) {
    return [
        'user_id' => $faker->unique()->numberBetween(config('factory.USER_AMOUNT') + 1, config('factory.USER_AMOUNT') + 1 + config('factory.MANAGER_AMOUNT')),
        'role' => 2
    ];
});

$factory->state(App\Entities\Account::class, 'admin', function ($faker) {
    return [
        'username' => 'admin',
        'password' => Hash::make('admin'),
        'role' => 3,
        'user_id' => 1
    ];
});