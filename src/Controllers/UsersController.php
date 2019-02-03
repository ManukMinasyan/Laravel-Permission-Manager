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

class UsersController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $users = config('laravel-permission-manager.user_model')::all();

        return view('laravel-permission-manager::users.index', compact('users'));
    }
}