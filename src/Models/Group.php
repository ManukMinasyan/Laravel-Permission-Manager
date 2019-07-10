<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 04/02/2019
 * Time: 02:35.
 */

namespace ManukMinasyan\LaravelPermissionManager\Models;

use \Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $fillable = [
        'name', 'comment'
    ];
}
