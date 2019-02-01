<!DOCTYPE html>
<!--[if lte IE 9]>     <html lang="en" class="no-focus lt-ie10 lt-ie10-msg"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en" class="no-focus"> <!--<![endif]-->
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
<!-- Page Container -->
<div id="page-container" class="sidebar-o side-scroll page-header-modern main-content-boxed">
    <!-- Sidebar -->
    <nav id="sidebar">
        <!-- Sidebar Scroll Container -->
        <div id="sidebar-scroll">
            <!-- Sidebar Content -->
            <div class="sidebar-content">
                <!-- Side Header -->
                <div class="content-header content-header-fullrow px-15">
                    <!-- Mini Mode -->
                    <div class="content-header-section sidebar-mini-visible-b">
                        <!-- Logo -->
                        <span class="content-header-item font-w700 font-size-xl float-left animated fadeIn">
                                    <span class="text-dual-primary-dark">c</span><span class="text-primary">b</span>
                                </span>
                        <!-- END Logo -->
                    </div>
                    <!-- END Mini Mode -->

                    <!-- Normal Mode -->
                    <div class="content-header-section text-center align-parent sidebar-mini-hidden">
                        <!-- Close Sidebar, Visible only on mobile screens -->
                        <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                        <button type="button" class="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                            <i class="fa fa-times text-danger"></i>
                        </button>
                        <!-- END Close Sidebar -->

                        <!-- Logo -->
                        <div class="content-header-item">
                            <a class="link-effect font-w700" href="index.html">
                                <i class="si si-fire text-primary"></i>
                                <span class="font-size-md text-dual-primary-dark">permission</span><span class="font-size-md text-primary">manager</span>
                            </a>
                        </div>
                        <!-- END Logo -->
                    </div>
                    <!-- END Normal Mode -->
                </div>
                <!-- END Side Header -->

                <!-- Side User -->
                <div class="content-side content-side-full content-side-user px-10 align-parent">
                    <!-- Visible only in mini mode -->
                    <div class="sidebar-mini-visible-b align-v animated fadeIn">
                        <img class="img-avatar img-avatar32" src="{{ packageAsset('img/avatars/avatar15.jpg') }}" alt="">
                    </div>
                    <!-- END Visible only in mini mode -->

                    <!-- Visible only in normal mode -->
                    <div class="sidebar-mini-hidden-b text-center">
                        <a class="img-link" href="be_pages_generic_profile.html">
                            <img class="img-avatar" src="{{ packageAsset('img/avatars/avatar15.jpg') }}" alt="">
                        </a>
                        <ul class="list-inline mt-10">
                            <li class="list-inline-item">
                                <a class="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase" href="be_pages_generic_profile.html">J. Smith</a>
                            </li>
                            <li class="list-inline-item">
                                <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                                <a class="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                    <i class="si si-drop"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="link-effect text-dual-primary-dark" href="op_auth_signin.html">
                                    <i class="si si-logout"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- END Visible only in normal mode -->
                </div>
                <!-- END Side User -->

                <!-- Side Navigation -->
                <div class="content-side content-side-full">
                    <ul class="nav-main">
                        <li>
                            <a class="active" href="be_pages_dashboard.html"><i class="si si-cup"></i><span class="sidebar-mini-hide">Dashboard</span></a>
                        </li>
                        <li>
                            <a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-settings"></i><span class="sidebar-mini-hide">Configs</span></a>
                            <ul>
                                <li>
                                    <a class="nav-submenu" data-toggle="nav-submenu" href="#"><span class="sidebar-mini-hide">Dashboards</span></a>
                                    <ul>
                                        <li>
                                            <a href="be_pages_dashboard2.html"><span class="sidebar-mini-hide">Dashboard 2</span></a>
                                        </li>
                                        <li>
                                            <a href="be_pages_dashboard3.html"><span class="sidebar-mini-hide">Dashboard 3</span></a>
                                        </li>
                                        <li>
                                            <a href="be_pages_dashboard4.html"><span class="sidebar-mini-hide">Dashboard 4</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-main-heading"><span class="sidebar-mini-visible">UI</span><span class="sidebar-mini-hidden">User Interface</span></li>
                        <li>
                            <a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-puzzle"></i><span class="sidebar-mini-hide">Blocks</span></a>
                            <ul>
                                <li>
                                    <a href="be_blocks.html">Styles</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- END Side Navigation -->
            </div>
            <!-- Sidebar Content -->
        </div>
        <!-- END Sidebar Scroll Container -->
    </nav>
    <!-- END Sidebar -->

    <!-- Header -->
    <header id="page-header">
        <!-- Header Content -->
        <div class="content-header">
            <!-- Left Section -->
            <div class="content-header-section">
                <!-- Toggle Sidebar -->
                <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                <button type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="sidebar_toggle">
                    <i class="fa fa-navicon"></i>
                </button>
                <!-- END Toggle Sidebar -->

                <!-- Open Search Section -->
                <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                <button type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="header_search_on">
                    <i class="fa fa-search"></i>
                </button>
                <!-- END Open Search Section -->
            </div>
            <!-- END Left Section -->

            <!-- Right Section -->
            <div class="content-header-section">
                <!-- User Dropdown -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        J. Smith<i class="fa fa-angle-down ml-5"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right min-width-150" aria-labelledby="page-header-user-dropdown">
                        <a class="dropdown-item" href="be_pages_generic_profile.html">
                            <i class="si si-user mr-5"></i> Profile
                        </a>
                        <a class="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_inbox.html">
                            <span><i class="si si-envelope-open mr-5"></i> Inbox</span>
                            <span class="badge badge-primary">3</span>
                        </a>
                        <a class="dropdown-item" href="be_pages_generic_invoice.html">
                            <i class="si si-note mr-5"></i> Invoices
                        </a>
                        <div class="dropdown-divider"></div>

                        <!-- Toggle Side Overlay -->
                        <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                        <a class="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                            <i class="si si-wrench mr-5"></i> Settings
                        </a>
                        <!-- END Side Overlay -->

                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="op_auth_signin.html">
                            <i class="si si-logout mr-5"></i> Sign Out
                        </a>
                    </div>
                </div>
                <!-- END User Dropdown -->
            </div>
            <!-- END Right Section -->
        </div>
        <!-- END Header Content -->

        <!-- Header Search -->
        <div id="page-header-search" class="overlay-header">
            <div class="content-header content-header-fullrow">
                <form action="be_pages_generic_search.html" method="post">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <!-- Close Search Section -->
                            <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                            <button type="button" class="btn btn-secondary" data-toggle="layout" data-action="header_search_off">
                                <i class="fa fa-times"></i>
                            </button>
                            <!-- END Close Search Section -->
                        </div>
                        <input type="text" class="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-secondary">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- END Header Search -->

        <!-- Header Loader -->
        <!-- Please check out the Activity page under Elements category to see examples of showing/hiding it -->
        <div id="page-header-loader" class="overlay-header bg-primary">
            <div class="content-header content-header-fullrow text-center">
                <div class="content-header-item">
                    <i class="fa fa-sun-o fa-spin text-white"></i>
                </div>
            </div>
        </div>
        <!-- END Header Loader -->
    </header>
    <!-- END Header -->

    <!-- Main Container -->
    <main id="main-container">
        <!-- Page Content -->
        <div class="content">
            <div class="row gutters-tiny invisible" data-toggle="appear">
                <!-- Row #1 -->
                <div class="col-6 col-xl-6">
                    <a class="block block-link-shadow text-right" href="javascript:void(0)">
                        <div class="block-content block-content-full clearfix">
                            <div class="float-left mt-10 d-none d-sm-block">
                                <i class="si si-users fa-3x text-body-bg-dark"></i>
                            </div>
                            <div class="font-size-h3 font-w600" data-toggle="countTo" data-speed="1000" data-to="4252">0</div>
                            <div class="font-size-sm font-w600 text-uppercase text-muted">Users</div>
                        </div>
                    </a>
                </div>
                <div class="col-6 col-xl-6">
                    <a class="block block-link-shadow text-right" href="javascript:void(0)">
                        <div class="block-content block-content-full clearfix">
                            <div class="float-left mt-10 d-none d-sm-block">
                                <i class="si si-link fa-3x text-body-bg-dark"></i>
                            </div>
                            <div class="font-size-h3 font-w600" data-toggle="countTo" data-speed="1000" data-to="38">0</div>
                            <div class="font-size-sm font-w600 text-uppercase text-muted">Routes</div>
                        </div>
                    </a>
                </div>
                <!-- END Row #1 -->
            </div>
            <div class="row gutters-tiny invisible" data-toggle="appear">
                <!-- Row #2 -->
                <div class="col-md-6">
                    <div class="block">
                        <div class="block-header">
                            <h3 class="block-title">
                                Sales <small>This week</small>
                            </h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                    <i class="si si-refresh"></i>
                                </button>
                                <button type="button" class="btn-block-option">
                                    <i class="si si-wrench"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content block-content-full">
                            <div class="pull-all">
                                <!-- Lines Chart Container -->
                                <canvas class="js-chartjs-dashboard-lines"></canvas>
                            </div>
                        </div>
                        <div class="block-content">
                            <div class="row items-push">
                                <div class="col-6 col-sm-4 text-center text-sm-left">
                                    <div class="font-size-sm font-w600 text-uppercase text-muted">This Month</div>
                                    <div class="font-size-h4 font-w600">720</div>
                                    <div class="font-w600 text-success">
                                        <i class="fa fa-caret-up"></i> +16%
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 text-center text-sm-left">
                                    <div class="font-size-sm font-w600 text-uppercase text-muted">This Week</div>
                                    <div class="font-size-h4 font-w600">160</div>
                                    <div class="font-w600 text-danger">
                                        <i class="fa fa-caret-down"></i> -3%
                                    </div>
                                </div>
                                <div class="col-12 col-sm-4 text-center text-sm-left">
                                    <div class="font-size-sm font-w600 text-uppercase text-muted">Average</div>
                                    <div class="font-size-h4 font-w600">24.3</div>
                                    <div class="font-w600 text-success">
                                        <i class="fa fa-caret-up"></i> +9%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="block">
                        <div class="block-header">
                            <h3 class="block-title">
                                Earnings <small>This week</small>
                            </h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                    <i class="si si-refresh"></i>
                                </button>
                                <button type="button" class="btn-block-option">
                                    <i class="si si-wrench"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content block-content-full">
                            <div class="pull-all">
                                <!-- Lines Chart Container -->
                                <canvas class="js-chartjs-dashboard-lines2"></canvas>
                            </div>
                        </div>
                        <div class="block-content bg-white">
                            <div class="row items-push">
                                <div class="col-6 col-sm-4 text-center text-sm-left">
                                    <div class="font-size-sm font-w600 text-uppercase text-muted">This Month</div>
                                    <div class="font-size-h4 font-w600">$ 6,540</div>
                                    <div class="font-w600 text-success">
                                        <i class="fa fa-caret-up"></i> +4%
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 text-center text-sm-left">
                                    <div class="font-size-sm font-w600 text-uppercase text-muted">This Week</div>
                                    <div class="font-size-h4 font-w600">$ 1,525</div>
                                    <div class="font-w600 text-danger">
                                        <i class="fa fa-caret-down"></i> -7%
                                    </div>
                                </div>
                                <div class="col-12 col-sm-4 text-center text-sm-left">
                                    <div class="font-size-sm font-w600 text-uppercase text-muted">Balance</div>
                                    <div class="font-size-h4 font-w600">$ 9,352</div>
                                    <div class="font-w600 text-success">
                                        <i class="fa fa-caret-up"></i> +35%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END Row #2 -->
            </div>
        </div>
        <!-- END Page Content -->
    </main>
    <!-- END Main Container -->

    <!-- Footer -->
    <footer id="page-footer" class="opacity-0">
        <div class="content py-20 font-size-xs clearfix">
            <div class="float-right">
                Crafted with <i class="fa fa-heart text-pulse"></i> by <a class="font-w600" href="https://minasyan.info/" target="_blank">Manuk Minasyan</a>
            </div>
            <div class="float-left">
                <a class="font-w600" href="https://goo.gl/po9Usv" target="_blank">Laravel Permission Manager 1.0</a> &copy; <span class="js-year-copy">2019</span>
            </div>
        </div>
    </footer>
    <!-- END Footer -->
</div>
<!-- END Page Container -->

<!-- Codebase Core JS -->
<script src="{{ packageAsset('js/core/jquery.min.js') }}"></script>
<script src="{{ packageAsset('js/core/bootstrap.bundle.min.js') }}"></script>
<script src="{{ packageAsset('js/core/jquery.slimscroll.min.js') }}"></script>
<script src="{{ packageAsset('js/core/jquery.scrollLock.min.js') }}"></script>
<script src="{{ packageAsset('js/core/jquery.appear.min.js') }}"></script>
<script src="{{ packageAsset('js/core/jquery.countTo.min.js') }}"></script>
<script src="{{ packageAsset('js/core/js.cookie.min.js') }}"></script>
<script src="{{ packageAsset('js/codebase.js') }}"></script>

<!-- Page JS Plugins -->
<script src="{{ packageAsset('js/plugins/chartjs/Chart.bundle.min.js') }}"></script>

<!-- Page JS Code -->
<script src="{{ packageAsset('js/pages/be_pages_dashboard.js') }}"></script>
</body>
</html>