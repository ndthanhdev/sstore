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


    $app->group(['prefix' => '/{id:[0-9]+}'], function () use ($app) {

        $app->get('', [
            'as' => 'categories/{id}.GET',
            'uses' => 'CategoryController@show'
        ]);

        $app->get('/categories', [
            'as' => 'categories/{id}/categories.GET',
            'uses' => 'CategoryController@childCategories'
        ]);


        $app->get('/products', [
            'as' => 'categories/{id}/products.GET',
            'uses' => 'CategoryController@products'
        ]);
    });


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

    $app->patch('/inactive', [
        'as' => 'carts/inactive.PATCH',
        'uses' => 'CartController@setToInactive',
        'middleware' => ['auth']
    ]);

    $app->post('/', [
        'as' => 'carts.POST',
        'uses' => 'CartController@store',
        'middleware' => ['auth']
    ]);


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

        $app->patch('/{detailId:[0-9]+}', [
            'as' => 'carts/{cartId}/details/{detailId}.PATCH',
            'uses' => 'CartDetailController@update'
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

    $app->get('/{id:[0-9]+}', [
        'as' => 'orders/{id}.GET',
        'uses' => 'OrderController@show',
        'middleware' => ['auth']
    ]);

    $app->patch('/{id:[0-9]+}/delivery/on-store', [
        'as' => 'orders/{id}/delivery/on-store.PATCH',
        'uses' => 'OrderController@deliveryOnStore',
        'middleware' => ['auth']
    ]);

    $app->patch('/{id:[0-9]+}/delivery/online', [
        'as' => 'orders/{id}/delivery/online.PATCH',
        'uses' => 'OrderController@deliveryOnline',
        'middleware' => ['auth']
    ]);

    $app->patch('/{id:[0-9]+}/done', [
        'as' => 'orders/{id}/done.PATCH',
        'uses' => 'OrderController@done',
        'middleware' => ['auth']
    ]);

    $app->post('/', [
        'as' => 'orders.POST',
        'uses' => 'OrderController@store',
        'middleware' => ['auth']
    ]);
});

///////////
// INVOICE API
///////////
$app->group(['prefix' => 'invoices'], function () use ($app) {

    $app->post('', [
        'as' => 'invoices.POST',
        'uses' => 'InvoiceController@store'
    ]);

    $app->get('/{id:[0-9]+}', [
        'as' => 'invoices/{id}.GET',
        'uses' => 'InvoiceController@show'
    ]);

});


///////////
// MQTT API
///////////
$app->group(['prefix' => 'mqtt'], function () use ($app) {

    $app->post('/s2d', [
        'as' => 'mqtt/s2d.POST',
        'uses' => 'MQTTController@publishS2D'
    ]);

    $app->group(['prefix' => 'tests'], function () use ($app) {

        $app->get('/cors', [
            'as' => 'mqtt/tests/cors',
            'uses' => 'MQTTController@testCORS'
        ]);

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

