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

class GeneralController extends Controller
{
    public function index()
    {
        return view('laravel-permission-manager::index');
    }

    public function routes()
    {
        $routes = Route::getRoutes()->getRoutes();

        return view();
    }
}