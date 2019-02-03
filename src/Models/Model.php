<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 04/02/2019
 * Time: 02:35
 */

namespace Lionix\SeoManager\Models;

use Illuminate\Database\Eloquent\Model as LaravelModel;

class Model extends LaravelModel
{
    protected $table;

    protected $fillable = ['model', 'activated'];

    /**
     * Model constructor.
     */
    public function __construct()
    {
        $this->table = config('laravel-permission-manager.database.model_table');
        parent::__construct();
    }
}