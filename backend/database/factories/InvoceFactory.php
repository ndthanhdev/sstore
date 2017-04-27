<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

$factory->define(\App\Entities\Invoice::class, function (Faker\Generator $faker) {
    $dateTimeThisYear = $faker->dateTimeThisYear;
    return [
        'created_at' => $dateTimeThisYear,
        'updated_at' => $dateTimeThisYear
    ];
});