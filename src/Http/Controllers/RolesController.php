<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25.
 */

namespace ManukMinasyan\LaravelPermissionManager\Http\Controllers;

use App\Http\Controllers\Controller;
use ManukMinasyan\LaravelPermissionManager\Http\Resources\Role\RoleResource;
use ManukMinasyan\LaravelPermissionManager\Models\Role;
use ManukMinasyan\LaravelPermissionManager\Requests\RoleRequest;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class RolesController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return RoleResource
     */
    public function index()
    {
        $roles = Role::with('abilities')->get();

        return new RoleResource($roles);
    }

    /**
     * @param RoleRequest $request
     * @return RoleResource
     */
    public function store(RoleRequest $request)
    {
        $data = $request->only('title', 'name');

        $role = Role::firstOrCreate($data);

        return new RoleResource($role);
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
