@extends('laravel-permission-manager::layouts.app')

@section('content')
    <!-- Striped Table -->
    <div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">Roles | Edit</h3>
        </div>
        <div class="block-content">
            <form action="{{ route('lpm.roles.update', $role->id) }}" method="post">
                @csrf @method('put')
                <div class="form-group">
                    <label for="example-nf-email">Title</label>
                    <input type="text" class="form-control" id="example-nf-email" name="title"
                           value="{{ $role->title }}" placeholder="Enter Title..">
                </div>
                <div class="form-group">
                    <label for="example-nf-password">Name</label>
                    <input type="text" class="form-control" id="example-nf-password" name="name"
                           value="{{ $role->name }}" placeholder="Enter Name..">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-alt-primary">Update</button>
                </div>
            </form>
            @include('laravel-permission-manager::components.alert-component')
        </div>
    </div>
    <!-- END Striped Table -->
@endsection