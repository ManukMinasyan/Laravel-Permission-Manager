<?php

Route::group([
    'middleware' => config('laravel-permission-manager.middleware'),
    'prefix' => 'permission-manager',
    'namespace' => 'ManukMinasyan\LaravelPermissionManager'
], function(){
    Route::get('/', 'GeneralController@index');
});