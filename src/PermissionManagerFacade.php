<?php

namespace ManukMinasyan\LaravelPermissionManager;

use Illuminate\Support\Facades\Facade;
use Silber\Bouncer\Bouncer;

class PermissionManagerFacade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return Bouncer::class;
    }
}