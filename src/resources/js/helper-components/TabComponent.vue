<template>
    <div v-show="isActive"><slot></slot></div>
</template>

<script>
    export default {
        name: "TabComponent",
        props: {
            name: { required: true },
            selected: { default: false},
            setMlAuto: {default: false}
        },
        data() {
            return {
                isActive: false
            };
        },
        computed: {
            href() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
        },
        mounted() {
            this.isActive = this.selected;
        }
    }
</script>

<style scoped>

</style>