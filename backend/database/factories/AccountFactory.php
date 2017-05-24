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
        'role' => 0,
    ];
});

$factory->state(App\Entities\Account::class, 'manager', function ($faker) {
    return ['role' => 1];
});

$factory->state(App\Entities\Account::class, 'admin', function ($faker) {
    return [
        'username' => 'admin',
        'password' => Hash::make('admin'),
        'role' => 2,
        'user_id' => 1
    ];
});