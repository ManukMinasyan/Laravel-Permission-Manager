@extends('laravel-permission-manager::layouts.app')

@section('content')
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
                        Sales
                        <small>This week</small>
                    </h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option" data-toggle="block-option"
                                data-action="state_toggle" data-action-mode="demo">
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
                        Earnings
                        <small>This week</small>
                    </h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option" data-toggle="block-option"
                                data-action="state_toggle" data-action-mode="demo">
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
@endsection