import Repository from "./Repository";

const resource = "/models";
export default {
    get() {
        return Repository.get(`${resource}`);
    },
};