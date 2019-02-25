@extends('laravel-permission-manager::layouts.app')

@section('content')
    <!-- Striped Table -->
    <div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">Roles | Create</h3>
        </div>
        <div class="block-content">
            <form action="{{ route('lpm.roles.store') }}" method="post">
                <div class="form-group">
                    <label for="example-nf-email">Title</label>
                    <input type="text" class="form-control" id="example-nf-email" name="title" placeholder="Enter Title..">
                </div>
                <div class="form-group">
                    <label for="example-nf-password">Name</label>
                    <input type="text" class="form-control" id="example-nf-password" name="name" placeholder="Enter Name..">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-alt-primary">Create</button>
                </div>
            </form>
        </div>
    </div>
    <!-- END Striped Table -->
@endsection