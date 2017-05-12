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



$app->group(['prefix' => 'catalogs'], function () use ($app) {

    $app->get('/', [
        'as' => 'catalogs.GET',
        'uses' => 'CatalogController@index'
    ]);

    $app->get('/{id}/categories', [
        'as' => 'catalogs/{id}/categories.GET',
        'uses' => 'CatalogController@categories'
    ]);

    $app->get('/{id}/products', [
        'as' => 'catalogs/{id}/products.GET',
        'uses' => 'CatalogController@products'
    ]);
});


$app->group(['prefix' => 'categories'], function () use ($app) {

    $app->get('/{id}/categories', [
        'as' => 'categories/{id}/categories.GET',
        'uses' => 'CategoryController@childCategories'
    ]);

    $app->get('/{id}/products', [
        'as' => 'categories/{id}/products.GET',
        'uses' => 'CategoryController@products'
    ]);

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


$app->group(['prefix' => 'mqtt'], function () use ($app) {


    $app->group(['prefix' => 'tests'], function () use ($app) {

        $app->get('/publish', [
            'as' => 'mqtt/tests/publish',
            'uses' => 'MQTTController@testPublish'
        ]);

        $app->get('/subscribe', [
            'as' => 'mqtt/tests/subscribe',
            'uses' => 'MQTTController@testSubscribe'
        ]);

    });

});

