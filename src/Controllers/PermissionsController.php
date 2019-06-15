<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use ManukMinasyan\LaravelPermissionManager\Models\Ability;
use ManukMinasyan\LaravelPermissionManager\Models\Role;
use ManukMinasyan\LaravelPermissionManager\Requests\PermissionRequest;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;
use Bouncer;
use Silber\Bouncer\BouncerFacade;

class PermissionsController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $abilities = Ability::with('roles')->get();

        return response()->json($abilities);

    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        return view('laravel-permission-manager::permissions.create', compact('roles'));
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(PermissionRequest $request)
    {
        $dataAbility = $request->only('title', 'name');

        $ability = Ability::firstOrCreate($dataAbility);

        if(isset($request['roles'])){
            $ability->roles()->sync(collect($request['roles'])->pluck('id'));
        }

        return response()->json(['success' => true]);
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
    public function destroy($ability)
    {
        Ability::find($ability)->delete();
        return response()->json($ability);
    }
}