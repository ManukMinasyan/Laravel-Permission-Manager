<?php

namespace ManukMinasyan\LaravelPermissionManager;

use Illuminate\Support\ServiceProvider;

class LaravelPermissionManagerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__ . '/routes/permission-manager.php');
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__ . '/resources/views', 'laravel-permission-manager');

        $this->publishes([
            __DIR__ . '/config/laravel-permission-manager.php' => config_path('laravel-permission-manager.php'),
        ], 'config');

        $this->publishes([
            __DIR__ . '/views' => base_path('resources/views/permission-manager/views'),
        ]);

        $this->publishes([
            __DIR__ . '/assets' => public_path('vendor/ManukMinasyan/LaravelPermissionManager'),
        ], 'assets');

        $this->registerHelpers();
    }

    /**
     * Register helpers file
     */
    private function registerHelpers()
    {
        if (file_exists($file = __DIR__ . '/helpers/helpers.php')) {
            require_once $file;
        }
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
//        $this->app->make('ManukMinasyan\LaravelPermissionManager\LaravelPermissionManagerController');
    }
}
