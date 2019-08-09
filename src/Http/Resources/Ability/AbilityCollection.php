<?php

namespace ManukMinasyan\LaravelPermissionManager\Http\Resources\Ability;

use Illuminate\Http\Resources\Json\ResourceCollection;

class AbilityCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function ($ability) {
            return (new AbilityResource($ability));
        });

        return parent::toArray($request);
    }
}
