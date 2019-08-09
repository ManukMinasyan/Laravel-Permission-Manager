<template>
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
                            <button type="button" class="btn btn-circle btn-dual-secondary d-lg-none align-v-r"
                                    data-toggle="layout" data-action="sidebar_close">
                                <i class="fa fa-times text-danger"></i>
                            </button>
                            <!-- END Close Sidebar -->

                            <!-- Logo -->
                            <div class="content-header-item">
                                <router-link class="link-effect font-w700" :to="{name: 'main'}">
                                    <i class="si si-fire text-primary"></i>
                                    <span class="font-size-md text-dual-primary-dark">permission</span><span
                                        class="font-size-md text-primary">manager</span>
                                </router-link>
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
                            <!--<img class="img-avatar img-avatar32" src="{{ packageAsset('img/avatars/avatar15.jpg') }}" alt="">-->
                        </div>
                        <!-- END Visible only in mini mode -->

                        <!-- Visible only in normal mode -->
                        <div class="sidebar-mini-hidden-b text-center">
                            <a class="img-link" href="be_pages_generic_profile.html">
                                <!--<img class="img-avatar" src="img/avatars/avatar15.jpg" alt="">-->
                            </a>
                            <ul class="list-inline mt-10">
                                <li class="list-inline-item">
                                    <span class="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase">
                                        {{ authUser.name }}
                                    </span>
                                </li>
                                <li class="list-inline-item">
                                    <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                                    <a class="link-effect text-dual-primary-dark" data-toggle="layout"
                                       data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                        <i class="si si-drop"></i>
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
                                <router-link :to="{name: 'main'}"><i class="si si-cup"></i><span
                                        class="sidebar-mini-hide">Dashboard</span></router-link>
                            </li>


                            <li v-for="route in routes">
                                <router-link :to="{name: route.hrefName}" class="sidebar-mini-hide">
                                    <i :class="route.class"></i> {{ route.name }}
                                </router-link>
                            </li>

                            <li class="nav-main-heading"><span class="sidebar-mini-visible">UI</span><span
                                    class="sidebar-mini-hidden">Models</span></li>
                            <li>
                                <router-link :to="{name: 'users'}"><i class="si si-users"></i><span
                                        class="sidebar-mini-hide">Users</span></router-link>
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
                    <button type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout"
                            data-action="sidebar_toggle">
                        <i class="fa fa-navicon"></i>
                    </button>
                    <!-- END Toggle Sidebar -->
                </div>
                <!-- END Left Section -->

                <!-- Right Section -->
                <div class="content-header-section">
                    <!-- User Dropdown -->
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ authUser.name }}
                        </button>
                    </div>
                    <!-- END User Dropdown -->
                </div>
                <!-- END Right Section -->
            </div>
            <!-- END Header Content -->

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
            <router-view></router-view>
            <!-- END Page Content -->
        </main>
        <!-- END Main Container -->

        <!-- Footer -->
        <footer id="page-footer" class="opacity-0">
            <div class="content py-20 font-size-xs clearfix">
                <div class="float-right">
                    Crafted with <i class="fa fa-heart text-pulse"></i> by <a class="font-w600"
                                                                              href="https://minasyan.info/"
                                                                              target="_blank">Manuk Minasyan</a>
                </div>
                <div class="float-left">
                    <a class="font-w600" href="https://github.com/ManukMinasyan/Laravel-Permission-Manager" target="_blank">Laravel Permission Manager 1.0</a>
                    &copy; <span class="js-year-copy">2019</span>
                </div>
            </div>
        </footer>
        <!-- END Footer -->
    </div>
</template>

<script>
    import {RepositoryFactory} from './../repositories/RepositoryFactory'
    const UserRepository = RepositoryFactory.get('user');

    export default {
        name: "AppComponent",
        data() {
            return {
                routes: [
                    {
                        name: 'Routes',
                        hrefName: 'routes',
                        class: 'si si-link'
                    },
                    {
                        name: 'Roles & Permissions',
                        hrefName: 'rolesPermissions',
                        class: 'si si-lock'
                    }
                ],
                authUser: {}
            }
        },
        created() {
            this.getAuthUser();
        },
        methods: {
            async getAuthUser() {
                this.isLoading = true;
                const {data} = await UserRepository.getAuthUser();
                this.authUser = data.data;
            },
        }
    }
</script>
