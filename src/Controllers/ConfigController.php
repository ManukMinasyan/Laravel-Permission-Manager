<?php
/**
 * Created by PhpStorm.
 * User: Manuk
 * Date: 01/02/2019
 * Time: 22:25
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class ConfigController extends Controller
{
    use PermissionManagerTrait;


    public function getConfigs()
    {
        $configs = [
            'apiUrl' => url(config('laravel-permission-manager.route')),
            'routes' => [
                [
                    'name' => 'Models',
                    'hrefName' => 'models'
                ]
            ]
        ];

        return $configs;
    }
}