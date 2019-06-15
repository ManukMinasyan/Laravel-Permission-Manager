<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 02/02/2019
 * Time: 15:07
 */

namespace ManukMinasyan\LaravelPermissionManager\Traits;


use Illuminate\Container\Container;
use Illuminate\Support\Facades\File;

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

    private function getRouteNamespaces($routes)
    {
        $i = 0;
        $finalNamespaces = [];
        foreach($routes as $route) {
            $finalNamespaces[$i++] = $route->action['namespace'];
        }

        return collect($finalNamespaces);
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    private function getModels() {
        $appNamespace = Container::getInstance()->getNamespace();
        $modelNamespace = 'Models';

        $models = collect(File::allFiles(app_path($modelNamespace)))->map(function ($item) use ($appNamespace, $modelNamespace) {
            $rel   = $item->getRelativePathName();
            $class = sprintf('\%s%s%s', $appNamespace, $modelNamespace ? $modelNamespace . '\\' : '',
                implode('\\', explode('/', substr($rel, 0, strrpos($rel, '.')))));
            if(class_exists($class)){
                $model = [
                    'name' => str_replace('.php', '', $item->getFilename()),
                    'path' => $class
                    ];
            }else{
                $model = null;
            }

            return $model;
        })->filter();

        return $models;
    }
}