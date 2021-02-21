import axios from "axios";

const portWithSuffix = window.location.port ? `${window.location.port}:` : "";

let baseDomain = window.location.protocol + '//' + window.location.hostname + portWithSuffix + '/laravel-permission-manager-route-api';

const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});