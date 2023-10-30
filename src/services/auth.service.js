
import { client } from "./client";
import {LoginResponse} from '../entity/index.js'

function checkedLoggedIn(){
    let token = localStorage.getItem("token");
    if(!token){
        return false;
    }
    try{
        let payload = token.split(".")[1];
        payload = JSON.parse(atob(payload));
        return payload["exp"] && payload["exp"] > Date.now() / 1000;
    }catch(e){
        return false;
    }
}
function setToken(token){
    localStorage.setItem("token",token);
}

function getToken(){
    return localStorage.getItem("token");
}

function logout(){
    localStorage.removeItem("token");
}
/**
 * login function, sends POST request to server.
 * 
 * @param {*} username 
 * @param {*} password 
 * @returns Promise
 * this Promise when resolve, will create a new LoginResponse Object from the data received,
 * or rejects the promise with error message
 */
function login(username,password){
    let params = {
        username,
        password
    };
    const data = new URLSearchParams();

    Object.entries(params)
        .map(([key,val]) => {data.append(key,val)})
        .join('&');
    return new Promise((resolve,reject) => {
        client.post('login', data,{
            headers: {

                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            resolve(new LoginResponse(response.data));
        }).catch(error => {
            console.log(error);
            reject("Authentication Failed")
        });

    });
}
/**
 * export both just for easy import, 
 * import authService
 * or 
 * import {login,logout} from ...
 * both works
 * is redundant? 
 * TODO: test if required to use both.
 */
const authService = {
    login,
    logout,
    setToken,
    getToken,
    checkedLoggedIn,
}
export {
    login,
    logout,
    setToken,
    getToken,
    checkedLoggedIn
}
export default authService;