<template>
    <div class="content">

        <div class="block">
            <tabs-component>
                <tab-component name="Users" :selected="true">
                    <div class="row border-bottom pb-1">
                        <div class="col-md-12">
                            <h6>Filter</h6>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control" placeholder="Live search..." v-model="searchText" @input="getFilteredUsers()">
                        </div>
                        <div class="col-md-3">
                            <v-select :options="([{title: 'All', name: 'all'}]).concat(roles)" label="title"
                                      v-model="selectedRoleFilter" @input="getFilteredUsers()"></v-select>
                        </div>
                        <div class="col-md-3">
                            <v-select :options="([{title: 'All', name: 'all'}]).concat(permissions)" label="title"
                                      v-model="selectedPermissionFilter" @input="getFilteredUsers()"></v-select>
                        </div>
                    </div>
                    <table class="table table-striped table-vcenter">
                        <thead>
                        <tr>
                            <th v-for="schema_item in schema">{{ schema_item }}</th>
                            <th class="text-center" style="width: 100px;">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user, key) in users">
                            <th class="text-center" scope="row" v-for="schema_item in schema">{{ user[schema_item] }}
                            </th>
                            <td class="text-center">
                                <div class="btn-group">
                                    <a href="" class="btn btn-sm btn-primary" data-toggle="modal"
                                       data-target="#modal-edit-permissions"
                                       title="Edit permissions" @click="setCurrentUser(user)">
                                        <i class="fa fa-lock"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </tab-component>
            </tabs-component>
        </div>
        <edit-permissions-component :current-user="currentUser"></edit-permissions-component>
    </div>
</template>

<script>
    import 'vue-select/dist/vue-select.css';
    import vSelect from 'vue-select';
    import {RepositoryFactory} from '../../../repositories/RepositoryFactory'
    import TabsComponent from "../../../helper-components/TabsComponent";
    import TabComponent from "../../../helper-components/TabComponent";
    import EditPermissionsComponent from "../User/EditPermissionsComponent";

    const UserRepository = RepositoryFactory.get('user');
    const RoleRepository = RepositoryFactory.get('role');
    const PermissionRepository = RepositoryFactory.get('permission');

    export default {
        name: "UsersComponent",
        components: {EditPermissionsComponent, TabComponent, TabsComponent, vSelect},
        data() {
            return {
                schema: {},
                users: [],
                roles: [],
                permissions: [],
                searchText: null,
                selectedRoleFilter: {
                    title: 'All',
                    name: 'all'
                },
                selectedPermissionFilter: {
                    title: 'All',
                    name: 'all'
                },
                currentUser: {}
            }
        },
        created() {
            this.getUsers();
            this.getRoles();
            this.getPermissions();
        },
        methods: {
            async getUsers() {
                this.isLoading = true;
                const {data} = await UserRepository.get();
                this.isLoading = false;
                this.users = data.users;
                this.schema = data.schema;
            },
            async getFilteredUsers() {
                let filters = {
                    searchText: this.searchText,
                    selectedRoleFilter: this.selectedRoleFilter.id ?? null,
                    selectedPermissionFilter: this.selectedPermissionFilter.id ?? null
                };

                this.isLoading = true;
                const {data} = await UserRepository.getFilteredUsers(filters);
                this.users = data.data;
            },
            async getRoles() {
                let res = await RoleRepository.get(true);
                this.roles = res.data;
            },
            async getPermissions() {
                const {data} = await PermissionRepository.get();
                this.permissions = data.data;
            },
            setCurrentUser(user) {
                this.currentUser = user;
            }
        }
    }
</script>