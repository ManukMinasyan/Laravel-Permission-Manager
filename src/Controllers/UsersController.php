<?php
/**
 * Created by PhpStorm.
 * User: Manuk
 * Date: 01/02/2019
 * Time: 22:25.
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
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

        return response()->json(['schema' => $schema, 'users' => $users]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAuthUser()
    {
        return response()->json(Auth::user());
    }

    public function getFilteredUsers(Request $request)
    {
        $filters = $request->only('searchText', 'selectedRoleFilter', 'selectedPermissionFilter');

        $userModel = config('laravel-permission-manager.user_model');
        $users = config('laravel-permission-manager.user_model')::with('roles', 'abilities');

        $table = with(new $userModel)->getTable();
        $schema = collect(Schema::getColumnListing($table))->filter(function($item){
            return $item !== 'password';
        });

        if (isset($filters['searchText'])) {
            $users->where(function ($q) use ($schema, $filters) {
                $q->where($schema[0],  'LIKE', '%' . $filters['searchText'] . '%');
                foreach ($schema as $schemaItem) {
                    $q->orWhere($schemaItem,  'LIKE', '%' .  $filters['searchText'] . '%');
                }
            });
        }

        if(isset($filters['selectedRoleFilter'])){
            $users->whereHas('roles', function($q)use($filters){
                $q->where('id', $filters['selectedRoleFilter']);
            });
        }

        return response()->json($users->get());
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
        $user->roles()->attach(collect($data)->pluck('id'));

//        $user->abilities()->sync(collect($data['abilities'])->pluck('id'));

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
