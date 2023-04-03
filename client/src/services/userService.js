import { clearUserData, setUserData } from './utils.js';
import * as api from './api.js';

const endpoints = {
    login: '/user/login/',
    register: '/user/register/',
    logout: '/user/logout/',
    del: (id)=> `/user/delete/${id}`,
}

export async function login(data) {
      const {
        username,
        password,
    } = data;
    const result = await api.post(endpoints.login,{username, password});
    setUserData(result);
    return result;
}
export  function deleteUser(id) {
    return api.del(endpoints.del(id));
   
}
export async function register(data) {
    const {
        username,
        email,
        password,
    } = data
    const result = await api.post(endpoints.register,{username,email, password});
    return result;
}

export async function logout() {
    api.get(endpoints.logout);
    clearUserData();
}
