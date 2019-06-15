<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:46
 */

return [
    'database' => [
        'model_table' => 'permission_manager_models',
        'route_table' => 'permission_manager_routes',
        'route_permission_table' => 'permission_manager_route_permission'
    ],

    'user_model' => \App\Models\User::class,

    'middleware' => [
          'web', 'auth',
    ],

    'route' => 'permission-manager'
];