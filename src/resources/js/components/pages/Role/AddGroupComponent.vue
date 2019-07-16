<template>
    <div class="modal fade" id="modal-add-group" tabindex="-1" role="dialog" aria-labelledby="modal-popout"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-popout" role="document">
            <div class="modal-content">
                <form @submit="storeGroup" method="post">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-primary-dark">
                            <h3 class="block-title">Create new group</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal"
                                        aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <div class="form-group">
                                <label for="group-name">Name</label>
                                <input type="text" class="form-control" id="group-name" v-model="group.name"
                                       placeholder="Enter Title..">
                            </div>
                            <div class="form-group">
                                <label for="group-comment">Comment</label>
                                <textarea v-model="group.comment" id="group-comment" cols="30" rows="5"
                                          class="form-control"></textarea>
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

    const GroupRepository = RepositoryFactory.get('group');

    export default {
        name: "AddGroupComponent",
        data() {
            return {
                group: {
                    name: '',
                    comment: ''
                },
                error: ''
            }
        },
        methods: {
            storeGroup(e) {
                e.preventDefault();

                let vm = this;
                vm.error = '';

                GroupRepository.create(this.group).then(res => {
                    vm.$parent.groups.push(res.data.data);
                    vm.group = {};
                    $('#modal-add-group').modal('toggle');
                    $('body').removeClass('modal-open');
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