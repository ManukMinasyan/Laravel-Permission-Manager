<template>
    <div class="modal fade" id="modal-add-permission" tabindex="-1" role="dialog" aria-labelledby="modal-popout"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-popout modal-md" role="document">
            <div class="modal-content">
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">
                            Add new permission
                        </h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal"
                                    aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="block-content tab-content">
                        <div class="tab-pane active" id="btabs-static-home" role="tabpanel">
                            <form @submit="storePermission" method="post">
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <div class="form-material">
                                            <input type="text" class="form-control" id="material-title"
                                                   v-model="permission.title"
                                                   placeholder="Please enter title">
                                            <label for="material-title">Title</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-material">
                                            <input type="text" class="form-control" id="material-name"
                                                   v-model="permission.name"
                                                   placeholder="Please enter name">
                                            <label for="material-name">Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-material">
                                            <v-select id="inputRoles" :options="roles" v-model="permission.roles"
                                                      label="title" :multiple="true"></v-select>
                                            <label for="inputRoles">Roles</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-material">
                                            <v-select id="inputGroup" :options="groups" v-model="permission.group"
                                                      label="name"></v-select>
                                            <label for="inputGroup">Group</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-9">
                                        <button type="submit" class="btn btn-alt-primary">Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="w-100 text-danger">{{ error }}</div>
                    <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {RepositoryFactory} from '../../../repositories/RepositoryFactory'
    import vSelect from 'vue-select';

    const RoleRepository = RepositoryFactory.get('role');
    const GroupRepository = RepositoryFactory.get('group');
    const PermissionRepository = RepositoryFactory.get('permission');

    export default {
        name: "AddPermissionComponent",
        data() {
            return {
                roles: [],
                groups: [],
                permission: {},
                error: ''
            }
        },
        components: {
            vSelect
        },
        created() {
            this.getRoles();
            this.getGroups();
        },
        methods: {
            async getRoles() {
                let res = await RoleRepository.get();
                this.roles = res.data;
            },
            async getGroups() {
                let res = await GroupRepository.get();
                this.groups = res.data;
            },
            storePermission(e) {
                e.preventDefault();
                let vm = this;
                vm.error = '';

                PermissionRepository.create(this.permission).then(res => {
                    vm.$parent.permissions.push(res.data.data);
                    vm.permission = {};
                    $('#modal-add-permission').modal('hide');
                    $('.modal-backdrop').remove();
                }).catch(error => {
                    let errors = error.response.data.errors;
                    vm.error = errors[Object.keys(errors)[0]][0];
                });
            }
        }
    }
</script>

<style scoped>

</style>