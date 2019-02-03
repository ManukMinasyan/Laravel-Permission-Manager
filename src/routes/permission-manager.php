<?php

Route::group([
    'middleware' => config('laravel-permission-manager.middleware'),
    'prefix' => config('laravel-permission-manager.route'),
    'namespace' => 'ManukMinasyan\LaravelPermissionManager',
    'as' => 'lpm.'
], function(){

    Route::get('/', 'GeneralController@index')->name('home');


    Route::group(['prefix' => 'models', 'as' => 'models.'], function(){
        Route::get('/', 'ModelsController@index')->name('index');
    });

    Route::group(['prefix' => 'roles', 'as' => 'roles.'], function(){
        Route::get('/', 'RolesController@index')->name('index');
    });

    Route::group(['prefix' => 'permissions', 'as' => 'permissions.'], function(){
        Route::get('/', 'RolesController@index')->name('index');
    });

    Route::group(['prefix' => 'routes', 'as' => 'routes.'], function(){
        Route::get('/', 'RoutesController@index')->name('index');
    });

    Route::group(['prefix' => 'users', 'as' => 'users.'], function(){
        Route::get('/', 'UsersController@index')->name('index');
    });

});