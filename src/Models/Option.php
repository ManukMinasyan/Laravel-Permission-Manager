<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 04/02/2019
 * Time: 02:35.
 */

namespace ManukMinasyan\LaravelPermissionManager\Models;

use Illuminate\Database\Eloquent\Model as LaravelModel;

class Option extends LaravelModel
{
    protected $table;

    protected $fillable = [
        'name', 'value'
    ];

    /**
     * Model constructor.
     */
    public function __construct()
    {
        $this->table = config('laravel-permission-manager.database.option_table');
        parent::__construct();
    }
}
