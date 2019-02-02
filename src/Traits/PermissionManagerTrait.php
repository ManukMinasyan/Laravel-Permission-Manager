<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 02/02/2019
 * Time: 15:07
 */

namespace ManukMinasyan\LaravelPermissionManager\Traits;


trait PermissionManagerTrait
{
    /**
     * @param $routes
     * @return \Illuminate\Support\Collection
     */
    private function getAssocRoutes($routes)
    {
        $i = 0;
        $finalRoutes = [];
        foreach($routes as $route) {
            $finalRoutes[$i++] = $route;
        }

        return collect($finalRoutes);
    }
}