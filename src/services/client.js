import axios from 'axios';
import { getToken } from './auth.service';
/**
 * axios is a js lib used for making http request from browser or node js.
 * promise- based http client
 * perform get post put delete,
 * auto json data transform -> transform request and response data to json.
 * erro handling: easy to catch and haddle errors.
 * request and response interceptors allow u to intercept requests or responses before they are handled.
 */

const client = axios.create({
    baseURL: "http://localhost:8080/",
});

const secureClient = axios.create({
    baseURL: "http://localhost:8080/",
});
/**
 * interceptors.request.use 
 * This method allow you to intercept and modify the http request before they are sent
 * use(callback)
 * attach a handler to the request, letting you modify the request configuration
 * or headers before request is made
 * 
 * this interceptor will get the token from auth.service
 * and attach this token to Authorization header as format:
 * Bearer <token> for each request made.
 */
secureClient.interceptors.request.use((config) =>
{
    let token = getToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
});

export{
    client,
    secureClient
}