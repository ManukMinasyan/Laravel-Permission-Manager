<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 04/02/2019
 * Time: 02:35.
 */

namespace ManukMinasyan\LaravelPermissionManager\Models;

use Illuminate\Database\Eloquent\Model as LaravelModel;

class Group extends LaravelModel
{
    protected $table;

    protected $fillable = [
        'name', 'comment'
    ];

    /**
     * Model constructor.
     */
    public function __construct()
    {
        $this->table = config('laravel-permission-manager.database.group_table');
        parent::__construct();
    }
}
