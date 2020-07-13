
import DEFAULT_CONFIG from './config.json';
let envConfig: Record<string, any> = {};
let defaultConfig: Record<string, any> = DEFAULT_CONFIG;

if (process.env.REACT_APP_NODE_ENV) {
    const env = process.env.REACT_APP_NODE_ENV.trim();
    envConfig = require(`./config.${env}.json`);
}

const config = {
    get: (key: string) => {
        return envConfig[key] || defaultConfig[key];
    }
}


export default config;