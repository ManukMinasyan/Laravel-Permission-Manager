<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 02/02/2019
 * Time: 15:47.
 */

namespace ManukMinasyan\LaravelPermissionManager\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use ManukMinasyan\LaravelPermissionManager\Models\Route;

class GeneralMiddleware
{
    /**
     * Handle an incoming request.
     *
<<<<<<< HEAD
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param  string|null $guard
=======
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     * @param string|null              $guard
     *
>>>>>>> 17f44b0e682a188257a283d83648774cb7913100
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
<<<<<<< HEAD
        $actionMethod = $request->route()->getAction()['uses'];
        $route = Route::where('action_method', $actionMethod)->first();

        if ($route) {
            $user = Auth::user();

            $access = $route->whereHas('abilities', function ($q) use ($user) {
                $q->whereIn('ability_id', $user->abilities->pluck('id'));
            })->exists();
        }


        if (isset($route) && $route->abilities()->exists() && isset($access) && !$access) {
            return abort(403);
        }

=======
        $routeName = $request->route()->getName();

>>>>>>> 17f44b0e682a188257a283d83648774cb7913100
        return $next($request);
    }
}
