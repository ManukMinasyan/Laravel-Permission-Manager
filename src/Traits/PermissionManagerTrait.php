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
            return class_exists($class) ? $class : null;
        })->filter();

        return $models;
    }
}