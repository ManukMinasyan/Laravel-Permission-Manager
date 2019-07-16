import Repository from "./Repository";

const resource = "/routes";
export default {
    get() {
        return Repository.get(`${resource}`);
    },
};