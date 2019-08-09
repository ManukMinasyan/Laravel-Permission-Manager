<?php
/**
 * Created by PhpStorm.
 * User: Manuk
 * Date: 01/02/2019
 * Time: 22:25.
 */

namespace ManukMinasyan\LaravelPermissionManager\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use ManukMinasyan\LaravelPermissionManager\Http\Resources\User\UserCollection;
use ManukMinasyan\LaravelPermissionManager\Http\Resources\User\UserResource;
use ManukMinasyan\LaravelPermissionManager\Models\Role;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class UsersController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $userModel = config('laravel-permission-manager.user_model');
        $users = config('laravel-permission-manager.user_model')::with('roles', 'abilities')->get();

        $table = with(new $userModel)->getTable();
        $schema = Schema::getColumnListing($table);

        return response()->json(['schema' => $schema, 'users' => new UserCollection($users)]);
    }

    /**
     * @return UserResource
     */
    public function getAuthUser()
    {
        return new UserResource(Auth::user());
    }

    /**
     * @param Request $request
     * @return UserCollection
     */
    public function getFilteredUsers(Request $request)
    {
        $filters = $request->only('searchText', 'selectedRoleFilter', 'selectedPermissionFilter');

        $userModel = config('laravel-permission-manager.user_model');
        $users = config('laravel-permission-manager.user_model')::with('roles', 'abilities');

        $table = with(new $userModel)->getTable();
        $schema = collect(Schema::getColumnListing($table))->filter(function ($item) {
            return $item !== 'password';
        });

        if (isset($filters['searchText'])) {
            $users->where(function ($q) use ($schema, $filters) {
                $q->where($schema[0], 'LIKE', '%' . $filters['searchText'] . '%');
                foreach ($schema as $schemaItem) {
                    $q->orWhere($schemaItem, 'LIKE', '%' . $filters['searchText'] . '%');
                }
            });
        }

        if (isset($filters['selectedRoleFilter'])) {
            $users->whereHas('roles', function ($q) use ($filters) {
                $q->where('id', $filters['selectedRoleFilter']);
            });
        }

        if (isset($filters['selectedPermissionFilter'])) {
            $users->whereHas('abilities', function ($q) use ($filters) {
                $q->where('id', $filters['selectedPermissionFilter']);
            });
        }

        return  new UserCollection($users->get());
    }

    /**
     * @param Request $request
     * @param $user_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function assignRole(Request $request, $user_id)
    {
        $data = $request->all();
        $user = config('laravel-permission-manager.user_model')::findOrFail($user_id);

        $user->roles()->detach();
        collect($data)->pluck('id')->each(function ($id) use ($user) {
            $user->assign(Role::find($id));
        });

        return response()->json(['success' => true]);
    }

    /**
     * @param Request $request
     * @param $user_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function attachAbility(Request $request, $user_id)
    {
        $data = $request->all();
        $user = config('laravel-permission-manager.user_model')::findOrFail($user_id);

        $user->abilities()->sync(collect($data)->pluck('id'));

        return response()->json(['success' => true]);
    }

    /**
     * @param Request $request
     * @param $user_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function detachAbility(Request $request, $user_id)
    {
        $data = $request->all();
        $user = config('laravel-permission-manager.user_model')::findOrFail($user_id);

        $user->abilities()->detach($data);

        return response()->json(['success' => true]);
    }
}