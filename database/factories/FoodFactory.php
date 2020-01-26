<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Food;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Food::class, function (Faker $faker) {
    return [
        'name' => join(' ', $faker->words(2)),
        'calories' => $faker->numberBetween(100, 700),
        'protein' => $faker->numberBetween(5, 50),
        'fat' => $faker->numberBetween(5, 50),
        'carbohydrates' => $faker->numberBetween(5, 50),
        'category' => $faker->numberBetween(0, 3),
        'logged_on' => Carbon::parse('2020-01-01'),
        'user_id' => 1,
    ];
});