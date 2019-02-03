<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class ModelsController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        // Models except user model
        $models = $this->getModels()->filter(function ($model) {
            $user_model = config('laravel-permission-manager.user_model');
            return $model !== $user_model && substr($model, 1) !== $user_model;
        });

//        $models->each(function($model){
//            dump($model::all()->toArray());
//        });


        return view('laravel-permission-manager::models.index', compact('models'));
    }
}