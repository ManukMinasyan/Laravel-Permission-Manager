@extends('laravel-permission-manager::layouts.laravelPermissionManagerApp')

@section('content')
    <!-- Striped Table -->
    <div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">Roles</h3>
            <div class="btn-group">
                <a href="{{ route('lpm.roles.create') }}" class="btn btn-primary btn-sm">Create</a>
            </div>
        </div>
        <div class="block-content">
            @include('laravel-permission-manager::components.alert-component')
            <table class="table table-striped table-vcenter">
                <thead>
                <tr>
                    <th class="text-center" style="width: 50px;">#</th>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Level</th>
                    <th class="d-none d-sm-table-cell" style="width: 15%;">Scope</th>
                    <th class="text-center" style="width: 100px;">Actions</th>
                </tr>
                </thead>
                <tbody>
                @foreach($roles as $role)
                    <tr>
                        <th class="text-center" scope="row">{{ $role->id }}</th>
                        <td>{{ $role->title }}</td>
                        <td>{{ $role->name }}</td>
                        <td>{{ $role->level }}</td>
                        <td>{{ $role->scope }}</td>
                        <td class="text-center">
                            <div class="btn-group">
                                <a href="{{ route('lpm.roles.edit', $role->id) }}" class="btn btn-sm btn-secondary" data-toggle="tooltip"
                                        title="Edit">
                                    <i class="fa fa-pencil"></i>
                                </a>
                                <form action="{{ route('lpm.roles.destroy', $role->id) }}" method="post">
                                    @method('delete') @csrf
                                    <button type="submit" class="btn btn-sm btn-secondary" data-toggle="tooltip"
                                            title="Delete">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </form>
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