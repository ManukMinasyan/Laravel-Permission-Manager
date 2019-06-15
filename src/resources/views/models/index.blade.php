@extends('laravel-permission-manager::layouts.laravelPermissionManagerApp')

@section('content')
    <!-- Striped Table -->
    <div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">Models</h3>
        </div>
        <div class="block-content">
            <table class="table table-striped table-vcenter">
                <thead>
                <tr>
                    <th class="text-center" style="width: 50px;">#</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Path</th>
                    <th class="text-center" style="width: 100px;">Actions</th>
                </tr>
                </thead>
                <tbody>
                @foreach($models as $key => $model)
                    <tr>
                        <td class="text-center">{{ $key+1 }}</td>
                        <td class="text-center">{{ $model['name'] }}</td>
                        <td class="text-center">{{ $model['path'] }}</td>
                        <td class="text-center">
                            <div class="btn-group">
                                <label class="css-control css-control-info css-checkbox" title="Add to management">
                                    <input type="checkbox" class="css-control-input">
                                    <span class="css-control-indicator"></span>
                                </label>
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