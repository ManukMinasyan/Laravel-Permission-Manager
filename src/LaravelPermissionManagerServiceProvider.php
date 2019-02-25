<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25
 */

namespace ManukMinasyan\LaravelPermissionManager;

use Illuminate\Support\ServiceProvider;
use ManukMinasyan\LaravelPermissionManager\Middleware\GeneralMiddleware;

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

        $router = $this->app['router'];
        $router->pushMiddlewareToGroup('web', GeneralMiddleware::class);
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
        $this->app->make('ManukMinasyan\LaravelPermissionManager\LaravelPermissionManager');
    }
}
