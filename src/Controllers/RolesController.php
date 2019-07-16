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
use ManukMinasyan\LaravelPermissionManager\Requests\RoleRequest;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class RolesController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $roles = Role::with('abilities')->get();

        return response()->json($roles);
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        return view('laravel-permission-manager::roles.create', compact('roles'));
    }

    /**
     * @param RoleRequest $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RoleRequest $request)
    {
        $data = $request->only('title', 'name');

        $role = Role::firstOrCreate($data);

        return response()->json(['status' => 'success', 'data' => $role]);
    }

    /**
     * @param $role_id
     *
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(RoleRequest $request, $role_id)
    {
        $data = $request->only('title', 'name');

        $role = Role::find($role_id);
        $role->update($data);

        return response()->json(['status' => 'success']);
    }

    /**
     * @param Role $role
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy(Role $role)
    {
        $role->delete();

        return response()->json(['status' => 'Role Successfully Deleted!']);
    }
}
