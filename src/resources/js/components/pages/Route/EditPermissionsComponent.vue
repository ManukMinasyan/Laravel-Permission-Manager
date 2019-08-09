<template>
    <div class="modal fade" id="modal-edit-permissions" tabindex="-1" role="dialog" aria-labelledby="modal-popout"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-popout modal-lg" role="document">
            <div class="modal-content">
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">
                            {{ currentRoute.uri}} | Permissions
                        </h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal"
                                    aria-label="Close" @click="closeModal()">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="block-content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="program-modal modal-expense">
                                    <div class="content">
                                        <div class="table-content">
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <template v-for="(permission_g, parent_key) in permissions">
                                                        <drag tag="td" class="drag parent" :transferData="permission_g">
                                                            <label class="program-container">
                                                                <span class="name">{{ parent_key }}</span>
                                                                <button class="btn btn-sm pull-right"
                                                                        @click="attachAbility(permission_g)">
                                                                    <i class="fa fa-arrow-right text-primary"></i>
                                                                </button>
                                                            </label>
                                                        </drag>
                                                        <template v-for="ability in permission_g">
                                                            <drag tag="td" class="drag" :transferData="ability">
                                                                <label class="program-container ability">
                                                                    <span class="name">{{ ability.title }}</span>
                                                                    <button class="btn btn-sm pull-right"
                                                                            @click="attachAbility(ability)">
                                                                        <i class="fa fa-arrow-right text-primary"></i>
                                                                    </button>
                                                                </label>
                                                            </drag>
                                                        </template>
                                                    </template>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="program-modal modal-expense">
                                    <div class="content">
                                        <div class="table-content">
                                            <drop class="drop drop-section"
                                                  :class="{ over }"
                                                  @dragover="over = true"
                                                  @dragleave="over = false"
                                                  @drop="attachAbility">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <template
                                                                v-for="(ability, parent_key) in currentRoute.abilities">
                                                            <td class="parent">
                                                                <label class="program-container">
                                                                    <span class="name">{{ ability.title }}</span>
                                                                    <button class="btn btn-sm pull-right"
                                                                            @click="detachAbility(ability, parent_key)">
                                                                        <i class="fa fa-remove text-danger"></i>
                                                                    </button>
                                                                </label>
                                                            </td>
                                                        </template>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </drop>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

    const RouteRepository = RepositoryFactory.get('route');
    const PermissionRepository = RepositoryFactory.get('permission');
    import {Drag, Drop} from 'vue-drag-drop';


    export default {
        name: "EditPermissionsComponent",
        components: {Drag, Drop},
        data() {
            return {
                permissions: [],
                error: '',
                over: false,
            }
        },
        props: {
            currentRoute: {}
        },
        created() {
            this.getAllPermissions();
        },
        methods: {
            async getAllPermissions() {
                const {data} = await PermissionRepository.get(true);
                this.permissions = data.data;
            },
            attachAbility(data) {
                let vm = this;
                this.over = false;

                if (Array.isArray(data)) {
                    data.forEach(function (ability) {
                        let key = vm.currentRoute.abilities.findIndex(function (item) {
                            return item.name === ability.name;
                        });
                        if (key === -1) {
                            vm.currentRoute.abilities = vm.currentRoute.abilities.concat(ability);
                        }
                    })
                } else {
                    let key = vm.currentRoute.abilities.findIndex(function (item) {
                        return item.name === data.name;
                    });
                    console.log(key);
                    if (key === -1) {
                        vm.currentRoute.abilities = vm.currentRoute.abilities.concat(data);
                    }
                }

                RouteRepository.create(vm.currentRoute);
            },
            detachAbility(ability, key) {
                let data = {
                    route: this.currentRoute,
                    ability: ability
                };

                RouteRepository.detachAbility(data);
                this.currentRoute.abilities.splice(key, 1);
            },
            closeModal() {
                this.$parent.showPermissions = !this.$parent.showPermissions;
            }
        }
    }
</script>

<style scoped lang="scss">
    .program-modal {
        width: 100%;
        .content {
            position: relative;
            border-bottom: 0;
            width: 100%;
            h3 {
                position: relative;
                display: block;
                font-size: 18px;
                height: 30px;
            }
            .table-content {
                height: 350px;
            }
            table {
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
                height: 100%;
                tbody {
                    width: 100%;
                    height: 100%;
                    display: inline-flex;
                    overflow-y: auto;
                    &::-webkit-scrollbar {
                        width: 8px;
                        position: relative;
                        left: 10px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background: #F2F2F3;
                        border-radius: 5px;
                    }
                    tr {
                        display: flex;
                        flex-flow: row wrap;
                        height: 50px;
                        flex: 1;
                    }
                }
                thead {
                    tr {
                        display: flex;
                        th {
                            flex: 1;
                            .program-container {
                                margin: 15px 25px;
                            }
                        }
                    }
                }
                tr {
                    display: block;
                    td, th {
                        font-size: 13px;
                        display: inline-block;
                        padding: 8px;
                        margin-right: 13px;
                        .program-container {
                            display: block;
                            position: relative;
                            padding-left: 15px;
                            margin: 15px 36px 15px 0;
                            cursor: pointer;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                            &.ability {
                                margin: 0 60px 0 15px;
                            }
                            /* Hide the browser's default checkbox */
                            input {
                                position: absolute;
                                cursor: pointer;
                                opacity: 0;
                                /* When the checkbox is checked, add a blue background */
                                &:checked ~ .checkmark {
                                    background-color: #1D86BF;
                                }
                                /* Show the checkmark when checked */
                                &:checked ~ .checkmark:after {
                                    display: block;
                                }
                            }
                            /* Create a custom checkbox */
                            .checkmark {
                                position: absolute;
                                top: 2px;
                                left: 0;
                                height: 16px;
                                width: 16px;
                                background-color: #F5F6FA;
                                border-radius: 3px;
                                /* Create the checkmark/indicator (hidden when not checked) */
                                &:after {
                                    content: "";
                                    position: absolute;
                                    display: none;
                                    left: 6px;
                                    top: 2px;
                                    width: 5px;
                                    height: 9px;
                                    border: solid white;
                                    border-width: 0 2px 2px 0;
                                    transform: rotate(45deg);
                                    -ms-transform: rotate(45deg);
                                    -webkit-transform: rotate(45deg);
                                }
                            }
                            /* On mouse-over, add a grey background color */
                            &:hover {
                                input ~ .checkmark {
                                    background-color: #ccc;
                                }
                            }
                        }
                    }
                    td.parent {
                        font-weight: bold;
                        padding: 0;
                        text-align: left;
                        background-color: #F5F6FA;
                        .program-container {
                            .checkmark {
                                background-color: #fff;
                            }
                        }
                    }
                    td {
                        width: 100%;
                        border-bottom: 1px solid #ddd;
                        background: #FFFFFF;
                    }
                }
            }
        }
    }

    .drop-section {
        min-height: 100px;
        height: 100%
    }
</style>