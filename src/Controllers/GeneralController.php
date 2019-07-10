<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25.
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use ManukMinasyan\LaravelPermissionManager\Models\Role;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class GeneralController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {

//        $roles = Role::with('abilities')->get();
//        dd($roles);
        return view('laravel-permission-manager::index');
    }
}
