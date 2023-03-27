import { clearUserData, setUserData } from './utils.js';
import * as api from './api.js';

const endpoints = {
    login: '/user/login/',
    register: '/user/register/',
    logout: '/user/logout/'
}

export async function login(data) {
    const {
        username,
        password,
    } = Object.fromEntries(data);
    const result = await api.post(endpoints.login,{username, password});
    setUserData(result);
    return result;
}

export async function register(data) {
    const {
        username,
        email,
        password,
        confirmPassword,
    } = Object.fromEntries(data);
    const result = await api.post(endpoints.register,{username,email, password});
    return result;
}

export async function logout() {
    api.get(endpoints.logout);
    clearUserData();
}
