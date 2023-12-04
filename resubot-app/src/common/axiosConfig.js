import _axios from 'axios';

//Axios, a promise based HTTP client for the browser and Node. js
import auth from './auth.js'

const axios = baseURL => {
    const instance = _axios.create({
        baseURL:
            baseURL || process.env.REACT_APP_API_DOMAIN || 'http://localhost:5000',
        timeout: 3000
    });

    instance.interceptors.request.use(
        config => {
            const jwToken = auth.getToken();
            config.headers['Authorization'] = 'Bearer ' + jwToken;
            //Do something before request is sent
            return config;
        },
        error => {
            //Do something with request error
            return Promise.reject(error);
        }
    );

    return instance;
};

export {axios};

export default axios();