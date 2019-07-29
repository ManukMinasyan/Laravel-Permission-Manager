import Repository from "./Repository";

const resource = "/routes";
export default {
    get() {
        return Repository.get(`${resource}`);
    },
    getActivated() {
        return Repository.get(`${resource}/activated`);
    },
    detachAbility(payload) {
        return Repository.post(`${resource}/detach-ability`, payload);
    },
    create(payload) {
        return Repository.post(`${resource}`, payload);
    },
    update(id, payload) {
        return Repository.patch(`${resource}/${id}`, payload);
    }
};