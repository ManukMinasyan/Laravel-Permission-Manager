import Repository from "./Repository";

const resource = "/roles";
export default {
    get() {
        return Repository.get(`${resource}`);
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
    assignPermission(payload) {
        return Repository.post(`${resource}`, payload);
    },
    unassignPermission(payload) {
        return Repository.post(`${resource}`, payload);
    }
};