<p align="center">
<img src="https://raw.githubusercontent.com/ManukMinasyan/Laravel-Permission-Manager/master/assets/branding/logo.png" width="356">
</p>

# LaravelPermissionManager
<a href="https://packagist.org/packages/manukminasyan/laravel-permission-manager"><img src="https://poser.pugx.org/manukminasyan/laravel-permission-manager/d/total.svg" alt="Total Downloads"></a>
<a href="https://github.com/ManukMinasyan/Laravel-Permission-Manager/blob/master/LICENSE"><img src="https://poser.pugx.org/manukminasyan/laravel-permission-manager/license.svg" alt="License"></a>

LaravelPermissionManager - It is a modern and dynamic permission management system based on Bouncer.

## Introduction
If you need to speed up project development, and you need to use permissions and roles in your project,
This package is perfect for you.
<img src="https://raw.githubusercontent.com/ManukMinasyan/Laravel-Permission-Manager/master/assets/branding/ui-control-panel.png">

## Installation
Install PermissionManager with [composer](https://getcomposer.org/doc/00-intro.md):

```
$ composer require manukminasyan/laravel-permission-manager
```

The service provider will automatically get registered. Or you may manually add the service provider in your config/app.php file:

```php
'providers' => [
    // ...
    ManukMinasyan\LaravelPermissionManager\LaravelPermissionManagerServiceProvider::class,
];
```

You can publish all the necessary files with:
```
php artisan vendor:publish --provider="ManukMinasyan\LaravelPermissionManager\LaravelPermissionManagerServiceProvider"
```

Add Bouncer's trait to your user model:
```php
use Silber\Bouncer\Database\HasRolesAndAbilities;

class User extends Model
{
    use HasRolesAndAbilities;
}
```

Finally, run the migrations:
```
php artisan migrate
```

Congratulations, you have successfully set up the project.
You can access the permission manager control panel using the URI "/permission-manager".

## Important information
The development of the package is not complete fully. you can install and evaluate my work. Thanks
