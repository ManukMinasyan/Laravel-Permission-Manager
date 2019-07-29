<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 04/02/2019
 * Time: 02:35
 */

namespace ManukMinasyan\LaravelPermissionManager\Models;

use Illuminate\Database\Eloquent\Model as LaravelModel;

class Route extends LaravelModel
{
    /**
     * @var \Illuminate\Config\Repository|mixed
     */
    protected $table;

    /**
     * @var array
     */
    protected $fillable = [
        'action_method'
    ];

    /**
     * Route constructor.
     * @param array $attributes
     */
    public function __construct(array $attributes = [])
    {
        $this->table = config('laravel-permission-manager.database.route_table');

        parent::__construct($attributes);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function abilities()
    {
        return $this->belongsToMany(Ability::class, config('laravel-permission-manager.database.route_permission_table'));
    }
}