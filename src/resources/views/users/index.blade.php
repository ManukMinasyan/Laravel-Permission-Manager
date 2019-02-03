@extends('laravel-permission-manager::layouts.app')

@section('content')
    <!-- Striped Table -->
    <div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">Users</h3>
        </div>
        <div class="block-content">
            <table class="table table-striped table-vcenter">
                <thead>
                <tr>
                    @foreach($users->first()->toArray() as $key => $info)
                        <th class="text-center" style="width: 50px;">{{ $key }}</th>
                    @endforeach
                    <th class="text-center" style="width: 100px;">Actions</th>
                </tr>
                </thead>
                <tbody>
                @foreach($users as $user)
                    <tr>
                        @foreach($user->toArray() as $info)
                            <td class="text-center">{{ $info }}</td>
                        @endforeach
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