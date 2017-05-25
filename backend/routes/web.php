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

///////////
// AUTHENTICATION API
///////////
$app->group(['prefix' => 'auth'], function () use ($app) {

    $app->post('login', [
        'as' => 'auth.LOGIN',
        'uses' => 'AuthController@login'
    ]);

    $app->post('register', [
        'as' => 'auth.REGISTER',
        'uses' => 'AuthController@register'
    ]);

});

///////////
// CATALOG API
///////////
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

///////////
// CATEGORY API
///////////
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

///////////
// CONFIGURATION API
///////////
$app->get('configurations', [
    'as' => 'configurations.GET',
    'uses' => 'ConfigurationController@index'
]);

///////////
// USER API
///////////
$app->group(['prefix' => 'users'], function () use ($app) {


    $app->get('/count', [
        'as' => 'users.COUNT',
        'uses' => 'UserController@count'
    ]);

    $app->get('/{id}', [
        'as' => 'users/{id}.GET',
        'uses' => 'UserController@show'
    ]);

});

///////////
// CART API
///////////
$app->group(['prefix' => 'carts'], function () use ($app) {

    $app->get('/', [
        'as' => 'carts.GET',
        'uses' => 'CartController@getActiveCart',
        'middleware' => ['auth']
    ]);

    $app->get('/{id:[0-9]+}', [
        'as' => 'carts/{id}.GET',
        'uses' => 'CartController@show'
    ]);

    $app->group(['prefix' => '/{cartId:[0-9]+}/details'], function () use ($app) {

        $app->post('', [
            'as' => 'carts/{cartId}/details.POST',
            'uses' => 'CartDetailController@store'
        ]);

        $app->get('/{detailId:[0-9]+}', [
            'as' => 'carts/{cartId}/details/{detailId}.GET',
            'uses' => 'CartDetailController@show'
        ]);

        $app->delete('/{detailId:[0-9]+}', [
            'as' => 'carts/{cartId}/details/{detailId}.DELETE',
            'uses' => 'CartDetailController@delete'
        ]);

    });

});

///////////
// PRODUCT API
///////////
$app->group(['prefix' => 'products'], function () use ($app) {

    $app->get('/{id:[0-9]+}', [
        'as' => 'products/{id}.GET',
        'uses' => 'ProductController@show'
    ]);

});

///////////
// STORE API
///////////
$app->group(['prefix' => 'stores'], function () use ($app) {

    $app->get('/', [
        'as' => 'stores.GET',
        'uses' => 'StoreController@show'
    ]);

    $app->get('/primary', [
        'as' => 'stores/primary.GET',
        'uses' => 'StoreController@primary'
    ]);

});

///////////
// ORDER API
///////////
$app->group(['prefix' => 'orders'], function () use ($app) {

    $app->get('/', [
        'as' => 'orders.GET',
        'uses' => 'OrderController@index',
        'middleware' => ['auth']
    ]);

});

///////////
// MQTT API
///////////
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

