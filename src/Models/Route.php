<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 04/02/2019
 * Time: 02:35.
 */

namespace ManukMinasyan\LaravelPermissionManager\Models;

use Illuminate\Database\Eloquent\Model as LaravelModel;

class Route extends LaravelModel
{
    protected $table;

    /**
     * Model constructor.
     */
    public function __construct()
    {
        $this->table = config('laravel-permission-manager.database.route_table');
        parent::__construct();
    }
}
