<template>
    <div class="modal fade" id="modal-add-role" tabindex="-1" role="dialog" aria-labelledby="modal-popout"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-popout" role="document">
            <div class="modal-content">
                <form @submit="storeRole" method="post">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Create new role</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal"
                                        aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <div class="form-group">
                                <label for="role-title">Title</label>
                                <input type="text" class="form-control" id="role-title" v-model="role.title"
                                       placeholder="Enter Title..">
                            </div>
                            <div class="form-group">
                                <label for="role-name">Name</label>
                                <input type="text" class="form-control" id="role-name" v-model="role.name"
                                       placeholder="Enter Name..">
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="w-100 text-danger">{{ error }}</div>
                        <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-alt-success">
                            <i class="fa fa-check"></i> Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {RepositoryFactory} from '../../../repositories/RepositoryFactory'

    const RoleRepository = RepositoryFactory.get('role');

    export default {
        name: "AddRoleComponent",
        data() {
            return {
                role: {
                    title: '',
                    name: ''
                },
                error: ''
            }
        },
        methods: {
            storeRole(e) {
                e.preventDefault();

                let vm = this;
                vm.error = '';

                RoleRepository.create(this.role).then(res => {
                    vm.$parent.roles.push(res.data.data);
                    vm.role = {};
                    $('#modal-add-role').modal('hide');
                    $('.modal-backdrop').remove();
                }).catch(error => {
                    let errors = error.response.data.errors;
                    this.error = errors[Object.keys(errors)[0]][0];
                });
            }
        }
    }
</script>

<style scoped>

</style>