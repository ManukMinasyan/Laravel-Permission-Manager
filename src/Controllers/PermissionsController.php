<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use ManukMinasyan\LaravelPermissionManager\Models\Ability;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class PermissionsController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        dd(Ability::all());
        $permissions = [];

        return view('laravel-permission-manager::permissions.index', compact('permissions'));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        return view('laravel-permission-manager::permissions.create', compact('roles'));
    }


    /**
     * @param RoleRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RoleRequest $request)
    {
        $data = $request->only('title', 'name');

        BouncerFacade::role()->firstOrCreate($data);

        return redirect()->back();
    }

    /**
     * @param $role_id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($role_id)
    {
        $role = Role::find($role_id);

        return view('laravel-permission-manager::roles.edit', compact('role'));
    }

    /**
     * @param RoleRequest $request
     * @param $role_id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(RoleRequest $request, $role_id)
    {
        $data = $request->only('title', 'name');

        $role = Role::find($role_id);
        $role->update($data);

        return redirect()->back();
    }

    /**
     *
     */
    public function delete()
    {

    }
}