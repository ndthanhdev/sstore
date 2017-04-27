<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

$factory->define(\App\Entities\Order::class, function (Faker\Generator $faker) {
    $dateTimeThisYear = $faker->dateTimeThisYear;
    return [
        'code' => $faker->unique()->regexify('SS[0-9]{5}'),
        'rating' => $faker->optional(0.6)->numberBetween(1, 5),
        'comment' => $faker->optional(0.6)->sentence(),
        'state' => 3, // default is DONE!
        'created_at' => $dateTimeThisYear,
        'updated_at' => $dateTimeThisYear
    ];
});

//$factory->state(\App\Entities\Orders::class, 'relation', function (\Faker\Generator $faker) {
//    return [
//        'shopping_cart_id' => $faker->numberBetween(1, config('factory.MANAGER_AMOUNT'))
//    ];
//});