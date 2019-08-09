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
use ManukMinasyan\LaravelPermissionManager\Models\Group;
use ManukMinasyan\LaravelPermissionManager\Models\Role;
use ManukMinasyan\LaravelPermissionManager\Requests\PermissionRequest;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;
use Bouncer;

class PermissionsController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {

        $abilities = Ability::with('roles', 'group')->get();

        if ($request->has('group_by_group')) {
            $abilities = $abilities->groupBy('group.name')->sort()->reverse();
        }

        return response()->json($abilities);
    }

    /**
     * @param PermissionRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(PermissionRequest $request)
    {
        $data = $request->validated();

        $ability = Ability::firstOrCreate([
            'title' => $data['title'],
            'name' => $data['name'],
        ]);

        if (isset($data['roles'])) {
            Bouncer::sync($ability)->roles(collect($data['roles'])->pluck('id'));
            collect($request['roles'])->each(function ($role) use ($ability) {
                $role = Role::findOrFail($role['id']);
                $role->abilities()->syncWithoutDetaching([$ability->id]);
            });
        }
        if (array_key_exists('group', $data)) {
            $ability->group_id = Group::findOrFail($data['group']['id'])->id;
        } elseif (array_key_exists('group', $data) && $data['group'] === null) {
            $ability->group_id = null;
        }
        $ability->save();

        return response()->json(['status' => 'success', 'data' => $ability->load('roles', 'group')]);
    }

    /**
     * @param PermissionRequest $request
     * @param $permission_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(PermissionRequest $request, $permission_id)
    {
        $data = $request->validated();

        $ability = Ability::find($permission_id);
        $ability->update($data);

        if (isset($data['roles'])) {
            Bouncer::sync($ability)->roles(collect($request['roles'])->pluck('id'));
            collect($request['roles'])->each(function ($role) use ($ability) {
                $role = Role::findOrFail($role['id']);
                $role->abilities()->syncWithoutDetaching([$ability->id]);
                Bouncer::allow($role)->to($ability);
            });
        }

        if (isset($data['group'])) {
            $ability->group_id = Group::findOrFail($data['group']['id'])->id;
        } elseif ($data['group'] === null) {
            $ability->group_id = null;
        }

        $ability->save();

        return response()->json(['success' => true]);
    }

    /**
     * @param $ability
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($ability)
    {
        Ability::findOrFail($ability)->delete();

        return response()->json(['success' => true]);
    }
}