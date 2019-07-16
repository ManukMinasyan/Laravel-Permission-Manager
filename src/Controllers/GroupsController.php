<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25.
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use ManukMinasyan\LaravelPermissionManager\Models\Group;
use ManukMinasyan\LaravelPermissionManager\Models\Role;
use ManukMinasyan\LaravelPermissionManager\Requests\GroupRequest;
use ManukMinasyan\LaravelPermissionManager\Requests\RoleRequest;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class GroupsController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $groups = Group::all();

        return response()->json($groups);
    }

    /**
     * @param GroupRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(GroupRequest $request)
    {
        $data = $request->validated();

        $group = new Group();
        $group->name = $data['name'];
        $group->comment = $data['comment'];
        $group->save();

        return response()->json(['status' => 'success', 'data' => $group]);
    }

    /**
     * @param GroupRequest $request
     * @param $group_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(GroupRequest $request, $group_id)
    {
        $data = $request->validated();

        $group = Group::findOrFail($group_id);
        $group->update($data);

        return response()->json(['status' => 'success']);
    }

    /**
     * @param Group $group
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(Group $group)
    {
        $group->delete();

        return response()->json(['status' => 'Group Successfully Deleted!']);
    }
}
