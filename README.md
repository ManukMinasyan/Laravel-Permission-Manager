# LaravelPermissionManager
LaravelPermissionManager - It is a modern and dynamic permission management system based on Bouncer.

##Introduction
If you need to speed up project development, and you need to use permissions and roles in your project,
This package is perfect for you.

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

##Important information
The development of the package is not complete fully. you can install and evaluate my work. Thanks