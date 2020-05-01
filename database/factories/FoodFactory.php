<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Food;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Food::class, function (Faker $faker) {
    $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));
    return [
        'name' => $faker->foodName(),
        'calories' => $faker->numberBetween(100, 700),
        'protein' => $faker->numberBetween(5, 15),
        'fat' => $faker->numberBetween(2, 5),
        'carbohydrates' => $faker->numberBetween(2, 5),
        'category' => $faker->numberBetween(0, 3),
        'logged_on' => new DateTime(),
        'user_id' => 1,
    ];
});