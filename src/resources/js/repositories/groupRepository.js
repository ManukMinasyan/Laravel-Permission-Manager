import Repository from "./Repository";

const resource = "/groups";
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
    }
};