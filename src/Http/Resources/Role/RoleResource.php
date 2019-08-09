<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 02/02/2019
 * Time: 15:47.
 */

namespace ManukMinasyan\LaravelPermissionManager\Http\Resources\Role;

use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}