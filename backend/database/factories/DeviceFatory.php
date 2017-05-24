<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\Device::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->regexify('SSDV[0-9]{5}'),
    ];
});