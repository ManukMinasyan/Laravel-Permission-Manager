<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25.
 */

namespace ManukMinasyan\LaravelPermissionManager\Http\Controllers;

use App\Http\Controllers\Controller;
use ManukMinasyan\LaravelPermissionManager\Http\Resources\Group\GroupCollection;
use ManukMinasyan\LaravelPermissionManager\Http\Resources\Group\GroupResource;
use ManukMinasyan\LaravelPermissionManager\Models\Group;
use ManukMinasyan\LaravelPermissionManager\Requests\GroupRequest;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class GroupsController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return GroupCollection
     */
    public function index()
    {
        $groups = Group::all();

        return new GroupCollection($groups);
    }

    /**
     * @param GroupRequest $request
     * @return GroupResource
     */
    public function store(GroupRequest $request)
    {
        $data = $request->validated();

        $group = new Group();
        $group->name = $data['name'];
        $group->comment = $data['comment'];
        $group->save();

        return new GroupResource($group);
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
