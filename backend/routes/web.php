<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('configurations', [
    'as' => 'configurations.GET',
    'uses' => 'ConfigurationController@index'
]);

$app->group(['prefix' => 'users'], function () use ($app) {

    $app->get('/count', [
        'as' => 'users.COUNT',
        'uses' => 'UserController@count'
    ]);

});


$app->group(['prefix' => 'products'], function () use ($app) {

    $app->get('/', [
        'as' => 'products.GET',
        'uses' => 'ProductController@index'
    ]);

});
