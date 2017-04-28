<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

$factory->define(\App\Entities\Catalog::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->state,
        'description' => $faker->sentence
    ];
});
