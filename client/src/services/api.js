import { clearUserData, getAccessToken } from "./utils.js";

const host = process.env.NODE_ENV === "development"
?'localhost:8000'
:'http://fear-ts.site/'

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };
    const token = getAccessToken();
    if (token !== null) {
        options.headers['Authorization'] = `Token ${token}`;
    }
    if (data) {
        if (data.username) {
            options.headers['Content-Type'] = 'application/json'
            options.body = JSON.stringify(data);
        }
        else {
            let form_data = new FormData();
            for (let key in data) {
                form_data.append(key, data[key]);
            }
            options.body = form_data
        }
    };
    try {
        const response = await fetch(host + url, options);
        if (response.ok !== true) {
            if (response.status === 403) {
                clearUserData()
            }
            const error = await response.json();
            throw error
        }
        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        throw err;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');

