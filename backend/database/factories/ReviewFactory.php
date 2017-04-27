<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

$factory->define(\App\Entities\Review::class, function (Faker\Generator $faker) {
    $dateTimeThisYear = $faker->dateTimeThisYear;
    return [
        'content' => $faker->paragraph(6),
        'created_at' => $dateTimeThisYear,
        'updated_at' => $dateTimeThisYear
    ];
});

$factory->state(\App\Entities\Review::class, 'relation', function (\Faker\Generator $faker) {
    return [
        'user_id' => $faker->numberBetween(1, config('factory.USER_AMOUNT') + config('factory.MANAGER_AMOUNT') + 1),
        'product_id' => $faker->numberBetween(1, config('factory.PRODUCT_AMOUNT'))
    ];
});