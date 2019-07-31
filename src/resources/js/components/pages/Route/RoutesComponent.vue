<template>
    <div class="content">

        <div class="block">
            <tabs-component>
                <tab-component name="Routes" :selected="true">
                    <div class="row border-bottom pb-1">
                        <div class="col-md-12">
                            <h6>Filter</h6>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control" placeholder="Live search..." v-model="searchText">
                        </div>
                        <div class="col-md-4">
                            <v-select :options="(['All']).concat(namespaces)" label="title"
                                      v-model="selectedNamespaceFilter"></v-select>
                        </div>
                        <div class="col-md-4">
                            <v-select :options="(['All']).concat(prefixes)"
                                      v-model="selectedPrefixFilter"></v-select>
                        </div>
                    </div>
                    <table class="table table-striped table-vcenter">
                        <thead>
                        <tr>
                            <th class="text-center" style="width: 50px;">#</th>
                            <th>URI</th>
                            <th>ACTION/NAME</th>
                            <th>ACTION/METHOD</th>
                            <th class="text-center" style="width: 100px;">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(route, key) in filteredRoutes">
                            <th class="text-center" scope="row">{{ key+1 }}</th>
                            <td>{{ route.uri }}</td>
                            <td>{{ route.action['as'] }}</td>
                            <td>{{ route.action['uses'] }}</td>
                            <td class="text-center">
                                <div class="btn-group">
                                    <a href="" class="btn btn-sm btn-primary" data-toggle="modal"
                                       data-target="#modal-edit-permissions"
                                       title="Edit permissions" @click="setCurrentRoute(route)">
                                        <i class="fa fa-lock"></i>
                                    </a>
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
                        </tbody>
                    </table>
                </tab-component>
            </tabs-component>
        </div>
        <edit-permissions-component :current-route="currentRoute"></edit-permissions-component>
    </div>
</template>

<script>
    import 'vue-select/dist/vue-select.css';
    import vSelect from 'vue-select';
    import {RepositoryFactory} from '../../../repositories/RepositoryFactory'
    import TabsComponent from "../../../helper-components/TabsComponent";
    import TabComponent from "../../../helper-components/TabComponent";
    import EditPermissionsComponent from "../Route/EditPermissionsComponent";

    const RouteRepository = RepositoryFactory.get('route');

    export default {
        name: "RoutesComponent",
        components: {EditPermissionsComponent,vSelect, TabComponent, TabsComponent},
        data() {
            return {
                routes: [],
                namespaces: [],
                prefixes: [],
                searchText: '',
                selectedNamespaceFilter: 'All',
                selectedPrefixFilter: 'All',
                currentRoute: {},
                activatedRoutes: []
            }
        },
        created() {
            this.getRoutes();
            this.getAcitvatedRoutes();
        },
        computed: {
            filteredRoutes() {
                let vm = this;
                let namespace = vm.selectedNamespaceFilter;
                let prefix = vm.selectedPrefixFilter;
                let searchText = vm.searchText;

                if (namespace === 'All' && prefix=== 'All' && searchText === '') {
                    return vm.routes;
                }

                return vm.routes.filter(function (item) {
                    return ((item.action.namespace === namespace) || namespace === 'All')
                        && (prefix === 'All' || prefix === item.action.prefix)
                        && (item.uri.indexOf(searchText) !== -1 || item.action['as'].indexOf(searchText) !== -1 || item.action['uses'].indexOf(searchText) !== -1);
                });
            }
        },
        methods: {
            async getRoutes() {
                this.isLoading = true;
                const {data} = await RouteRepository.get();
                this.isLoading = false;
                this.routes = data.routes;
                this.namespaces = data.namespaces;
                this.prefixes = data.prefixes;
            },
            async getAcitvatedRoutes() {
                this.isLoading = true;
                const {data} = await RouteRepository.getActivated();
                this.isLoading = false;
                this.activatedRoutes = data;
            },
            setCurrentRoute(route) {
                this.currentRoute = route;
            }
        }
    }
</script>