<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\Device::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->regexify('SSDV[0-9]{5}'),
        'mac_address' => $faker->macAddress,
    ];
});

$factory->state(\App\Entities\Device::class, 'relation', function (\Faker\Generator $faker) {
    $fakerAlt = Faker\Factory::create();
    return [
        'store_id' => $fakerAlt->numberBetween(1, config('factory.MANAGER_AMOUNT'))
    ];
});