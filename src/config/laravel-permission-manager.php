<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:46.
 */

return [
    'database' => [
        'model_table' => 'permission_manager_models',
<<<<<<< HEAD
        'route_table' => 'permission_manager_routes',
        'route_permission_table' => 'permission_manager_route_permission'
=======
>>>>>>> 17f44b0e682a188257a283d83648774cb7913100
    ],

    'user_model' => \App\Models\User::class,

    'middleware' => [
          'web', 'auth',
    ],

    'route' => 'permission-manager',
];
