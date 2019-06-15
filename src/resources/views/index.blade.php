<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title>Laravel Permission Manager</title>

    <meta name="description" content="Laravel Permission Manager by Manuk Minasyan">
    <meta name="author" content="Manuk Minasyan">
    <meta name="robots" content="noindex, nofollow">

    <!-- Open Graph Meta -->
    <meta property="og:title" content="Laravel Permission Manager">
    <meta property="og:site_name" content="Laravel Permission Manager">
    <meta property="og:description" content="Laravel Permission Manager by Manuk Minasyan">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Icons -->
    <!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers -->
    <link rel="shortcut icon" href="{{ packageAsset('img/favicons/favicon.png') }}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ packageAsset('img/favicons/favicon-192x192.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ packageAsset('img/favicons/apple-touch-icon-180x180.png') }}">
    <!-- END Icons -->

    <!-- Stylesheets -->
    <!-- Codebase framework -->
    <link rel="stylesheet" id="css-main" href="{{ packageAsset('css/codebase.min.css') }}">

    <!-- You can include a specific file from css/themes/ folder to alter the default color theme of the template. eg: -->
    <!-- <link rel="stylesheet" id="css-theme" href="assets/css/themes/flat.min.css"> -->
<!-- END Stylesheets -->
</head>
<body>

<!-- LaravelPermissionManager App -->
<div id="lpm-app"></div>

<!-- Codebase Core JS -->
<script src="{{ packageAsset('js/laravel-permission-manager.app.js') }}"></script>
<script src="{{ packageAsset('js/core/jquery.min.js') }}"></script>
<script src="{{ packageAsset('js/core/bootstrap.bundle.min.js') }}"></script>
<script src="{{ packageAsset('js/core/jquery.slimscroll.min.js') }}"></script>
<script src="{{ packageAsset('js/core/jquery.scrollLock.min.js') }}"></script>
<script src="{{ packageAsset('js/core/jquery.appear.min.js') }}"></script>
<script src="{{ packageAsset('js/core/jquery.countTo.min.js') }}"></script>
<script src="{{ packageAsset('js/core/js.cookie.min.js') }}"></script>
<script src="{{ packageAsset('js/codebase.js') }}"></script>
</body>
</html>