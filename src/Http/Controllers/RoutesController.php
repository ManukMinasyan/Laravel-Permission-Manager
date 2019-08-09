<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25.
 */

namespace ManukMinasyan\LaravelPermissionManager\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route as RouteFacade;
use ManukMinasyan\LaravelPermissionManager\Models\Route;
use ManukMinasyan\LaravelPermissionManager\Requests\RouteRequest;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class RoutesController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $routes = RouteFacade::getRoutes()->getRoutesByName();
        $namespaces = collect();
        $prefixes = collect();
        $routes = collect($this->getAssocRoutes($routes))->map(function ($route)use($namespaces, $prefixes) {
            $namespaces->push($route->action['namespace']);
            $prefixes->push($route->action['prefix']);

            $route->abilities = optional(Route::where('action_method', $route->action['uses'])->first())->abilities ?? [];
            return $route;
        });

        return response()->json([
            'routes' => $routes->toArray(),
            'namespaces' => $namespaces->unique()->values(),
            'prefixes' => $prefixes->filter(function($key){
                return $key !== null;
            })->unique()->values()
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getActivated()
    {
        $activatedRoutes = Route::all();
        $routes = RouteFacade::getRoutes()->getRoutesByName();
        $routes = collect($this->getAssocRoutes($routes));

        $routes = $routes->whereIn('action.uses', $activatedRoutes->pluck('action_method'));


        return response()->json($routes);
    }

    /**
     * @param RouteRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(RouteRequest $request)
    {
        $data = $request->all();

        $routeData = [
            'action_method' => $data['action']['uses']
        ];

        $route = Route::firstOrCreate($routeData);
        $route->abilities()->sync(collect($data['abilities'])->pluck('id'));

        return response()->json(['success' => true]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function detachAbility(Request $request) {
        $data = $request->all();
        $route = Route::where('action_method', $data['route']['action']['uses'])->firstOrFail();
        $route->abilities()->detach($data['ability']);

        return response()->json(['success' => true]);
    }
}
