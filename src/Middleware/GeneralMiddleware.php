<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 02/02/2019
 * Time: 15:47
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
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param  string|null $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
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

        return $next($request);
    }
}
