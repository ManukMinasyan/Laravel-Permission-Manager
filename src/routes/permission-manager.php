<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:46
 */

Route::group([
    'middleware' => config('laravel-permission-manager.middleware'),
    'prefix' => config('laravel-permission-manager.route'),
    'namespace' => 'ManukMinasyan\LaravelPermissionManager',
    'as' => 'lpm.'
], function () {
    Route::get('/', 'GeneralController@index')->name('home');
});

Route::group([
    'middleware' => config('laravel-permission-manager.middleware'),
    'prefix' => 'laravel-permission-manager-route-api',
    'namespace' => 'ManukMinasyan\LaravelPermissionManager',
], function () {
    Route::group(['prefix' => 'models', 'as' => 'models.'], function () {
        Route::get('/', 'ModelsController@get');
    });

    Route::resource('roles', 'RolesController');
    Route::resource('groups', 'GroupsController');
    Route::resource('permissions', 'PermissionsController');

    Route::get('/routes/activated', 'RoutesController@getActivated');
    Route::post('/routes/detach-ability', 'RoutesController@detachAbility');
    Route::resource('routes', 'RoutesController');

    Route::group(['prefix' => 'users', 'as' => 'users.'], function () {
        Route::get('/filtered-users', 'UsersController@getFilteredUsers');
        Route::get('/auth-user', 'UsersController@getAuthUser');
        Route::post('/assign-role/{user_id}', 'UsersController@assignRole');
        Route::post('/attach-ability/{user_id}', 'UsersController@attachAbility');
        Route::post('/detach-ability/{user_id}', 'UsersController@detachAbility');
        Route::get('/', 'UsersController@index');
    });
});