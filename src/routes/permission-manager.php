<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:46.
 */
Route::group([
    'middleware' => config('laravel-permission-manager.middleware'),
    'prefix'     => config('laravel-permission-manager.route'),
    'namespace'  => 'ManukMinasyan\LaravelPermissionManager',
    'as'         => 'lpm.',
], function () {
    Route::get('/', 'GeneralController@index')->name('home');

    Route::group(['prefix' => 'models', 'as' => 'models.'], function () {
        Route::get('/', 'ModelsController@index')->name('index');
    });

    Route::resource('roles', 'RolesController');

    Route::group(['prefix' => 'permissions', 'as' => 'permissions.'], function () {
        Route::get('/', 'PermissionsController@index')->name('index');
    });

    Route::group(['prefix' => 'routes', 'as' => 'routes.'], function () {
        Route::get('/', 'RoutesController@index')->name('index');
    });

    Route::group(['prefix' => 'users', 'as' => 'users.'], function () {
        Route::get('/', 'UsersController@index')->name('index');
    });
});
