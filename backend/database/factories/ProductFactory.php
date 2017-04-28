<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\Product::class, function (Faker\Generator $faker) {
    $dateTimeThisYear = $faker->dateTimeThisYear;
    return [
        'name' => $faker->unique()->streetName,
        'barcode' => $faker->creditCardNumber,
        'description' => $faker->sentence,
        'img_url' => $faker->imageUrl(1000, 1300, 'cats'),
        'created_at' => $dateTimeThisYear,
        'updated_at' => $dateTimeThisYear
    ];
});


$factory->state(\App\Entities\Product::class, 'relation', function (Faker\Generator $faker) {
    return [
        'category_id' => $faker->numberBetween(1, config('factory.CATEGORY_AMOUNT')),
        'product_type_id' => $faker->numberBetween(1, config('factory.PRODUCT_TYPE_AMOUNT'))
    ];
});