import Repository from "./Repository";

const resource = "/permissions";
export default {
    get(group_by = false) {
        let uri = `${resource}`;

        if (group_by) {
            uri = `${resource}?group_by_group=1`;
        }

        return Repository.get(uri);
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