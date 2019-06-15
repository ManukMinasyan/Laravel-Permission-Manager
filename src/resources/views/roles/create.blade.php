@extends('laravel-permission-manager::layouts.laravelPermissionManagerApp')

@section('content')
    <!-- Striped Table -->
    <div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">Roles | Create</h3>
        </div>
        <div class="block-content">
            <form action="{{ route('lpm.roles.store') }}" method="post">
                @csrf
                <div class="form-group">
                    <label for="example-nf-email">Title</label>
                    <input type="text" class="form-control" id="example-nf-email" name="title"
                           placeholder="Enter Title..">
                </div>
                <div class="form-group">
                    <label for="example-nf-password">Name</label>
                    <input type="text" class="form-control" id="example-nf-password" name="name"
                           placeholder="Enter Name..">
                </div>
                <div class="form-group row">
                    <div class="col-lg-8">
                        <div class="form-material">
                            <select class="js-select2 form-control" id="example2-select2-multiple"
                                    name="example2-select2-multiple" style="width: 100%;"
                                    data-placeholder="Choose many.." multiple>
                                <option></option>
                                <!-- Required for data-placeholder attribute to work with Select2 plugin -->
                                <option value="1">HTML</option>
                                <option value="2">CSS</option>
                                <option value="3">JavaScript</option>
                                <option value="4">PHP</option>
                                <option value="5">MySQL</option>
                                <option value="6">Ruby</option>
                                <option value="7">AngularJS</option>
                            </select>
                            <label for="example2-select2-multiple">Permissions</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-alt-primary">Create</button>
                </div>
            </form>
            @include('laravel-permission-manager::components.alert-component')
        </div>
    </div>
    <!-- END Striped Table -->
@endsection

@push('styles')
    <link rel="stylesheet" href="{{ packageAsset('js/plugins/select2/select2.min.css') }}">
    <link rel="stylesheet" href="{{ packageAsset('js/plugins/select2/select2-bootstrap.min.css') }}">
@endpush

@push('scripts')
    <script src="{{ packageAsset('js/plugins/select2/select2.full.min.js') }}"></script>
@endpush