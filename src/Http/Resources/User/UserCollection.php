<?php

namespace ManukMinasyan\LaravelPermissionManager\Http\Resources\User;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function ($user) {
            return (new UserResource($user));
        });

        return parent::toArray($request);
    }
}