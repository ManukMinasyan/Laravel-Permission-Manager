import axios from "axios";

const portPrefixed = window.location.port ? `:${window.location.port}` : "";

let baseDomain = window.location.protocol + '//' + window.location.hostname + portPrefixed + '/laravel-permission-manager-route-api';

const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});