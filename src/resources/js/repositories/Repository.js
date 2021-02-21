import axios from "axios";


let baseDomain = window.location.protocol + '//' + window.location.hostname + '/laravel-permission-manager-route-api';

const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});