import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


/**
 * Lazy Loading Component Import
 * @param view
 * @returns {function(): (Promise<*>|*)}
 */
function loadView(view) {
    return () => import(`../components/${view}.vue`)
}


let routes = [
    {
        path: '/',
        name: 'main',
        component: loadView('MainComponent')
    },
    {
        path: '/models',
        name: 'models',
        component: loadView('pages/Model/ModelsComponent')
    },
    {
        path: '/routes',
        name: 'routes',
        component: loadView('pages/Route/RoutesComponent')
    },
    {
        path: '/users',
        name: 'users',
        component: loadView('pages/User/UsersComponent')
    },
    {
        path: '/roles-and-permissions',
        name: 'rolesPermissions',
        component: loadView('pages/Role/RolesPermissionsComponent')
    }
];


export const router = new VueRouter({
    routes
});