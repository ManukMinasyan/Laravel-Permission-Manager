<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 04/02/2019
 * Time: 02:35
 */

namespace ManukMinasyan\LaravelPermissionManager\Models;

use Silber\Bouncer\Database\Ability as BouncerAbility;

class Ability extends BouncerAbility
{
    public function routes()
    {
        return $this->belongsToMany(Route::class, config('laravel-permission-manager.database.route_permission_table'));
    }
}