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

class GeneralMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            return redirect('/home');
        }

        return $next($request);
    }
}
