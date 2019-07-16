<template>
    <div class="content">

        <div class="block">
            <tabs-component>
                <tab-component  name="All routes" :selected="true">
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
                        <tr v-for="(route, key) in routes">
                            <th class="text-center" scope="row">{{ key+1 }}</th>
                            <td>{{ route.uri }}</td>
                            <td>{{ route.action['as'] }}</td>
                            <td>{{ route.action['uses'] }}</td>
                            <td class="text-center">
                                <div class="btn-group">
                                    <a href="" class="btn btn-sm btn-primary" data-toggle="modal"
                                       data-target="#modal-edit-permissions"
                                       title="Edit permissions" @click="showEditPermissions(route)">
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
                <tab-component  name="Activated routes">
                    <h1>Hello 10</h1>
                </tab-component>
            </tabs-component>
        </div>
        <edit-permissions-component :current-route="currentRoute" v-if="showedEditPermissions"></edit-permissions-component>
    </div>
</template>

<script>
    import {RepositoryFactory} from '../../../repositories/RepositoryFactory'
    import TabsComponent from "../../../helper-components/TabsComponent";
    import TabComponent from "../../../helper-components/TabComponent";
    import EditPermissionsComponent from "../Route/EditPermissionsComponent";

    const RouteRepository = RepositoryFactory.get('route');

    export default {
        name: "RoutesComponent",
        components: {EditPermissionsComponent, TabComponent, TabsComponent},
        data() {
            return {
                routes: [],
                currentRoute: {},
                showedEditPermissions: false
            }
        },
        created() {
            this.getRoutes();
        },
        methods: {
            async getRoutes() {
                this.isLoading = true;
                const {data} = await RouteRepository.get();
                this.isLoading = false;
                this.routes = data;
            },
            showEditPermissions(route){
                this.currentRoute = route;
                this.showedEditPermissions = true;
            }
        }
    }
</script>