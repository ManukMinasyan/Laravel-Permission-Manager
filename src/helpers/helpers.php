<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25
 */

if (!function_exists('packageAsset')) {
    function packageAsset($asset)
    {
        return asset('vendor/ManukMinasyan/LaravelPermissionManager/'.$asset);
    }
}