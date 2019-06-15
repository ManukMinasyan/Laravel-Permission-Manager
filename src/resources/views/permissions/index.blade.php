@extends('laravel-permission-manager::layouts.app')

@section('content')
    <!-- Striped Table -->
    <div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">Permissions</h3>
        </div>
        <div class="block-content">
            <table class="table table-striped table-vcenter">
                <thead>
                <tr>
                    <th class="text-center" style="width: 50px;">#</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Title</th>
                    <th class="text-center">Entity Type</th>
                    <th class="d-none d-sm-table-cell" style="width: 15%;">Roles</th>
                    <th class="text-center" style="width: 100px;">Actions</th>
                </tr>
                </thead>
                <tbody>
                @foreach($abilities as $ability)
                    <tr>
                        <th class="text-center" scope="row">{{ $ability->id }}</th>
                        <td class="text-center">{{ $ability->name }}</td>
                        <td class="text-center">{{ $ability->title }}</td>
                        <td class="text-center">{{ $ability->entity_type }}</td>
                        <td class="d-none d-sm-table-cell">
                            @if($ability->roles()->exists())
                                <span class="badge badge-primary">
                                @foreach($ability->roles as $role)
                                        {{ $role->name }}
                                    @endforeach
                                </span>
                            @endif
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
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <!-- END Striped Table -->

@endsection