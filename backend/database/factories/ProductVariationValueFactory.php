<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

$factory->define(\App\Entities\ProductVariationValue::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->hexColor,
        'value' => $faker->word,
    ];
});