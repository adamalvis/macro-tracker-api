<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/validate-token', 'Auth\LoginController@validateToken');

Route::middleware('auth:api')->group(function () {
    Route::resource('food', 'FoodController');
    Route::post('/resend-email-verification', 'Auth\RegisterController@resendEmailVerification');

    Route::get('/targets', 'TargetController@getForUser');
    Route::patch('/targets', 'TargetController@updateForUser');
});
