import Repository from "./Repository";

const resource = "/users";
export default {
    get() {
        return Repository.get(`${resource}`);
    },
    getAuthUser() {
        return Repository.get(`${resource}/auth-user`);
    },
    getFilteredUsers(payload) {
        return Repository.get(`${resource}/filtered-users`, {params: payload});
    },
    create(payload) {
        return Repository.post(`${resource}`, payload);
    },
    update(id, payload) {
        return Repository.patch(`${resource}/${id}`, payload);
    },
    delete(id) {
        return Repository.delete(`${resource}/${id}`);
    },
    assignRole(id, payload) {
        return Repository.post(`${resource}/assign-role/${id}`, payload);
    },
    attachAbility(id, payload) {
        return Repository.post(`${resource}/attach-ability/${id}`, payload);
    },
    detachAbility(id, payload) {
        return Repository.post(`${resource}/detach-ability/${id}`, payload);
    },
    assignPermission(payload) {
        return Repository.post(`${resource}`, payload);
    },
    unassignPermission(payload) {
        return Repository.post(`${resource}`, payload);
    }
};