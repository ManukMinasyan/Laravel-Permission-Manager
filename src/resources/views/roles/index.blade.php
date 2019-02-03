@extends('laravel-permission-manager::layouts.app')

@section('content')
    <!-- Striped Table -->
    <div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">Routes</h3>
        </div>
        <div class="block-content">
            <table class="table table-striped table-vcenter">
                <thead>
                <tr>
                    <th class="text-center" style="width: 50px;">#</th>
                    <th>URI</th>
                    <th>ACTION/NAME</th>
                    <th>ACTION/METHOD</th>
                    <th class="d-none d-sm-table-cell" style="width: 15%;">Access</th>
                    <th class="text-center" style="width: 100px;">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th class="text-center" scope="row">1</th>
                    <td class="d-none d-sm-table-cell">
                        <span class="badge badge-primary">Personal</span>
                    </td>
                    <td class="text-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-secondary" data-toggle="tooltip"
                                    title="Edit">
                                <i class="fa fa-pencil"></i>
                            </button>
                            <button type="button" class="btn btn-sm btn-secondary" data-toggle="tooltip"
                                    title="Delete">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- END Striped Table -->

@endsection