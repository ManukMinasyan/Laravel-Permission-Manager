<template>
    <div class="content">
        <div class="block">
            <tabs-component>
                <tab-component name="Permissions" :selected="true">
                    <div class="row border-bottom pb-1">
                        <div class="col-md-12">
                            <h6>Filter</h6>
                        </div>
                        <div class="col-md-3">
                            <v-select :options="([{title: 'All', name: 'all'}]).concat(roles)" label="title"
                                      v-model="selectedRoleFilter"></v-select>
                        </div>
                        <div class="col-md-3">
                            <v-select :options="([{name: 'All'}]).concat(groups)" label="name"
                                      v-model="selectedGroupFilter"></v-select>
                        </div>
                        <div class="col-md-1 offset-md-5">
                            <button class="btn btn-sm btn-primary" title="Add new permission"
                                    data-toggle="modal" data-target="#modal-add-permission">
                                <i class='si si-plus'></i>
                            </button>
                        </div>
                    </div>

                    <table class="table table-striped table-vcenter mt-5">
                        <thead>
                        <tr>
                            <th class="text-center" style="width: 50px;">#</th>
                            <th>Title</th>
                            <th>Name</th>
                            <th style="width: 25%;">Roles</th>
                            <th style="width: 25%;">Group</th>
                            <th class="text-center" style="width: 100px;">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(permission, key) in filteredPermissions">
                            <th class="text-center" scope="row">{{ key+1 }}</th>
                            <td>
                                <template v-if="permission.edittable">
                                    <input type="text" v-model="permission.title" class="form-control">
                                </template>
                                <template v-else>
                                    {{ permission.title }}
                                </template>
                            </td>
                            <td>
                                <template v-if="permission.edittable">
                                    <input type="text" v-model="permission.name" class="form-control">
                                </template>
                                <template v-else>
                                    {{ permission.name }}
                                </template>
                            </td>
                            <td style="width: 25%;">
                                <v-select :options="roles" v-model="permission.roles" label="title"
                                          :multiple="true" @input="updatePermission(permission)"></v-select>
                            </td>
                            <td style="width: 25%;">
                                <v-select :options="groups" v-model="permission.group" label="name"
                                          :multiple="true" @input="updatePermission(permission)"></v-select>
                            </td>
                            <td class="text-center">
                                <div class="btn-group">
                                    <a v-if="permission.edittable" @click="updatePermission(permission)"
                                       class="btn btn-sm btn-secondary"
                                       data-toggle="tooltip"
                                       title="Update permission">
                                        <i class="fa fa-save"></i>
                                    </a>
                                    <a v-else @click="$set(permission, 'edittable', true)"
                                       class="btn btn-sm btn-secondary"
                                       data-toggle="tooltip"
                                       title="Edit permission">
                                        <i class="fa fa-pencil"></i>
                                    </a>
                                    <button type="button" class="btn btn-sm btn-secondary" data-toggle="tooltip"
                                            title="Delete role" @click="removePermission(key, permission.id)">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </tab-component>
                <tab-component name="Roles">
                    <div class="row border-bottom pb-1">
                        <div class="col-md-12">
                            <div class="btn-group">
                                <a href="#" class="btn btn-primary btn-sm" data-toggle="modal"
                                   data-target="#modal-add-role"><i class="si si-plus"></i></a>
                            </div>
                        </div>
                    </div>
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
                        <tr v-for="(role, key) in roles">
                            <th class="text-center" scope="row">{{ key+1 }}</th>
                            <td>
                                <template v-if="role.edittable">
                                    <input type="text" v-model="role.title" class="form-control">
                                </template>
                                <template v-else>
                                    {{ role.title }}
                                </template>
                            </td>
                            <td>
                                <template v-if="role.edittable">
                                    <input type="text" v-model="role.name" class="form-control">
                                </template>
                                <template v-else>
                                    {{ role.name }}
                                </template>
                            </td>
                            <td>{{ role.level }}</td>
                            <td>{{ role.scope }}</td>
                            <td class="text-center">
                                <div class="btn-group">
                                    <a v-if="role.edittable" @click="updateRole(role)"
                                       class="btn btn-sm btn-secondary"
                                       data-toggle="tooltip"
                                       title="Update role">
                                        <i class="fa fa-save"></i>
                                    </a>
                                    <a v-else @click="$set(role, 'edittable', true)"
                                       class="btn btn-sm btn-secondary"
                                       data-toggle="tooltip"
                                       title="Edit role">
                                        <i class="fa fa-pencil"></i>
                                    </a>
                                    <button type="button" class="btn btn-sm btn-secondary" data-toggle="tooltip"
                                            title="Delete role" @click="removeRole(key, role.id)">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </tab-component>
                <tab-component name="Groups">
                    <div class="row border-bottom pb-1">
                        <div class="col-md-12">
                            <div class="btn-group">
                                <a href="#" class="btn btn-primary btn-sm" data-toggle="modal"
                                   data-target="#modal-add-group"><i class="si si-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-vcenter">
                        <thead>
                        <tr>
                            <th class="text-center" style="width: 50px;">#</th>
                            <th>Name</th>
                            <th>Comment</th>
                            <th class="text-center" style="width: 100px;">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(group, key) in groups">
                            <th class="text-center" scope="row">{{ key+1 }}</th>
                            <td>
                                <template v-if="group.edittable">
                                    <input type="text" v-model="group.name" class="form-control">
                                </template>
                                <template v-else>
                                    {{ group.name }}
                                </template>
                            </td>
                            <td>
                                <template v-if="group.edittable">
                                    <input type="text" v-model="group.comment" class="form-control">
                                </template>
                                <template v-else>
                                    {{ group.comment }}
                                </template>
                            </td>
                            <td class="text-center">
                                <div class="btn-group">
                                    <a v-if="group.edittable" @click="updateGroup(group)"
                                       class="btn btn-sm btn-secondary"
                                       data-toggle="tooltip"
                                       title="Update group">
                                        <i class="fa fa-save"></i>
                                    </a>
                                    <a v-else @click="$set(group, 'edittable', true)"
                                       class="btn btn-sm btn-secondary"
                                       data-toggle="tooltip"
                                       title="Edit group">
                                        <i class="fa fa-pencil"></i>
                                    </a>
                                    <button type="button" class="btn btn-sm btn-secondary" data-toggle="tooltip"
                                            title="Delete group" @click="removeGroup(key, group.id)">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </tab-component>
            </tabs-component>
        </div>

        <add-role-component></add-role-component>
        <add-group-component></add-group-component>
        <add-permission-component></add-permission-component>
    </div>
</template>

<script>
    import 'vue-select/dist/vue-select.css';
    import vSelect from 'vue-select';
    import {RepositoryFactory} from '../../../repositories/RepositoryFactory'
    import AddRoleComponent from "./AddRoleComponent";
    import AddPermissionComponent from "./AddPermissionComponent";

    import TabsComponent from "../../../helper-components/TabsComponent";
    import TabComponent from "../../../helper-components/TabComponent";
    import AddGroupComponent from "./AddGroupComponent";

    const RoleRepository = RepositoryFactory.get('role');
    const GroupRepository = RepositoryFactory.get('group');
    const PermissionRepository = RepositoryFactory.get('permission');

    export default {
        name: "RolesPermissionsComponent",
        components: {AddGroupComponent, vSelect, AddPermissionComponent, AddRoleComponent, TabsComponent, TabComponent},
        data() {
            return {
                permissions: [],
                roles: [],
                groups: [],
                selectedRoleFilter: {
                    title: 'All',
                    name: 'all'
                },
                selectedGroupFilter: {
                    name: 'All'
                },
                newPermission: {},
                error: '',
            }
        },
        created() {
            this.getPermissions();
            this.getRoles();
            this.getGroups();
        },
        computed: {
            filteredPermissions() {
                let vm = this;
                let role = vm.selectedRoleFilter;
                let group = vm.selectedGroupFilter;

                if (role.name === 'all' && group.name === 'All') {
                    return vm.permissions;
                }

                return vm.permissions.filter(function (item) {
                    return ((item.group !== null && item.group.name === group.name) || group.name === 'All')
                        && (role.name === 'all' || item.roles.some(function (r) {
                            return r.name === role.name;
                        }));
                });
            }
        },
        methods: {
            async getRoles() {
                this.isLoading = true;
                const {data} = await RoleRepository.get();
                this.isLoading = false;
                this.roles = data;
            },
            async getGroups() {
                this.isLoading = true;
                const {data} = await GroupRepository.get();
                this.isLoading = false;
                this.groups = data;
            },
            async getPermissions() {
                this.isLoading = true;
                const {data} = await PermissionRepository.get();
                this.isLoading = false;
                this.permissions = data;
            },
            updatePermission(permission) {
                this.$set(permission, 'edittable', false);

                if (Array.isArray(permission.group)) {
                    permission.group = permission.group[0] ?? null;
                } else {
                    permission.group = permission.group ?? null;
                }

                PermissionRepository.update(permission.id, permission);
            },
            removePermission(key, permissionId) {
                PermissionRepository.delete(permissionId);
                this.permissions.splice(key, 1);
            },
            updateRole(role) {
                this.$set(role, 'edittable', false);
                RoleRepository.update(role.id, role);
            },
            removeRole(key, roleId) {
                RoleRepository.delete(roleId);
                this.roles.splice(key, 1);
            },
            updateGroup(group) {
                this.$set(group, 'edittable', false);
                GroupRepository.update(group.id, group);
            },
            removeGroup(key, groupId) {
                GroupRepository.delete(groupId);
                this.groups.splice(key, 1);
            },
            filterByRole(role) {
                if (role === null) {
                    this.filteredPermissions = this.permissions;
                } else {
                    this.filteredPermissions = this.permissions.filter(function (item) {
                        return item.roles.some(function (r) {
                            return r.name === role.name;
                        })
                    });
                }
            },
            filterByGroup(group) {
                if (group === null) {
                    this.filteredPermissions = this.permissions;
                } else {
                    this.filteredPermissions = this.permissions.filter(function (item) {
                        return item.group.name === group.name;
                    });
                }
            }
        }
    }
</script>

<style scoped lang="sass">
</style>