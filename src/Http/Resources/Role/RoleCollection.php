<?php

namespace ManukMinasyan\LaravelPermissionManager\Http\Resources\Role;

use Illuminate\Http\Resources\Json\ResourceCollection;

class RoleCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function ($role) {
            return (new RoleResource($role));
        });

        return parent::toArray($request);
    }
}