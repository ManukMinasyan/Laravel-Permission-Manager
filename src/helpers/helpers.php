<?php

if (!function_exists('packageAsset')) {
    function packageAsset($asset)
    {
        return asset('vendor/ManukMinasyan/LaravelPermissionManager/'.$asset);
    }
}