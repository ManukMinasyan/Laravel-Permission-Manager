<?php
/**
 * Created by PhpStorm.
 * User: Manuk
 * Date: 01/02/2019
 * Time: 22:25
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class UsersController extends Controller
{
    use PermissionManagerTrait;

    public function index()
    {
        echo 'users';
    }
}