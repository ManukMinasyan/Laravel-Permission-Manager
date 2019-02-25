<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;
use Auth;

class ModelsController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        // Models except user model
        $models = $this->getModels()->filter(function ($model) {
            $user_model = config('laravel-permission-manager.user_model');
            return $model['path'] !== $user_model && substr($model['path'], 1) !== $user_model;
        });

        return view('laravel-permission-manager::models.index', compact('models'));
    }
}