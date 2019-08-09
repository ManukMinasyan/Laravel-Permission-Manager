<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 02/02/2019
 * Time: 15:47.
 */

namespace ManukMinasyan\LaravelPermissionManager\Http\Resources\Ability;

use Illuminate\Http\Resources\Json\JsonResource;

class AbilityResource extends JsonResource
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
