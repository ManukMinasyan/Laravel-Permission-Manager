<template>
    <div>
        <ul class="nav nav-tabs nav-tabs-block" data-toggle="tabs" role="tablist">
            <li class="nav-item"  v-for="tab in tabs" :class="{'ml-auto': tab.setMlAuto}">
                <a class="nav-link" :data-href="tab.href" @click="selectTab(tab)" :class="{ 'active': tab.isActive }" v-html="tab.name"></a>
            </li>
        </ul>
        <div class="block-content tab-content">
            <div class="tab-pane active" id="btabs-static-home" role="tabpanel">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabsComponent",
        data() {
            return {
                tabs: []
            }
        },
        created() {
            this.tabs = this.$children;
        },
        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name === selectedTab.name);
                });
            }
        }
    }
</script>

<style scoped>
    .nav-item .nav-link {
        cursor: pointer;
    }


    .nav-tabs-block .nav-link:focus, .nav-tabs-block .nav-link:hover {
        cursor: pointer;
        color: #42a5f5;
        background-color: transparent;
        border-color: transparent;
    }
</style>