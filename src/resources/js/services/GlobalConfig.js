let ConfigRoute = '/laravel-permission-manager-config-route-api';
import axios from 'axios';

export default class GlobalConfig {
    getConfigs() {
        return axios.get(ConfigRoute).then(function(res){
            configs = res.data;
        });
    }
    getRoutes() {
        console.log(this.getConfigs());
        return this.getConfigs();
    }
}