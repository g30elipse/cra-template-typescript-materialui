import Config from './Config';
import axios from 'axios';

const VALIDATE_CONFIG_PROPERTIES = ['BASE_URL'];

const validateConfig = () => {
    VALIDATE_CONFIG_PROPERTIES.forEach(key => {
        const val = Config.get(key);
        // if (!val)
        //     throw new Error(`App config must define ${key}`);
    });

}

const Boot = () => {
    return new Promise((resolve, reject) => {
        validateConfig();
        axios.defaults.baseURL = Config.get('BASE_URL');
        resolve();
    })
};

export default Boot;