<?php

namespace ManukMinasyan\LaravelPermissionManager\Http\Resources\Group;

use Illuminate\Http\Resources\Json\ResourceCollection;

class GroupCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function ($group) {
            return (new GroupResource($group));
        });

        return parent::toArray($request);
    }
}