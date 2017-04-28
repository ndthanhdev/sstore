<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

$factory->define(\App\Entities\Order::class, function (Faker\Generator $faker) {
    $dateTimeThisYear = $faker->dateTimeThisYear;
    return [
        'code' => $faker->unique()->regexify('SSORD[0-9]{5}'),
        'rating' => $faker->optional(0.6)->numberBetween(1, 5),
        'comment' => $faker->optional(0.6)->sentence(),
        'state' => 3, // default is DONE!
        'created_at' => $dateTimeThisYear,
        'updated_at' => $dateTimeThisYear
    ];
});