<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:46
 */

return [
    'database' => [
        'model_table' => 'permission_manager_models'
    ],

    'user_model' => \App\Models\User::class,

    'middleware' => [
//          'auth',
    ],

    'route' => 'permission-manager'
];