import * as api from './api.js';
const endpoint = {
    fears: '/places/all/',
    animals: '/places/animals/',
    water: '/places/water/',
    height: '/places/height/',
    other: '/places/other/',
    create: '/places/create/',
    details: (placeId)=> `/places/details/${placeId}`,
    delete: (placeId)=> `/places/delete/${placeId}`,
    edit: (placeId)=> `/places/edit/${placeId}`,
    like: (placeId)=> `/places/like/${placeId}`,
};

export async function getAllFears(){
    return await api.get(endpoint.fears)
};
export async function getAnimals(){
    return await api.get(endpoint.animals)
};
export async function getWater(){
    return await api.get(endpoint.water)
};
export async function getHeight(){
    return await api.get(endpoint.height)
};
export async function getOther(){
    return await api.get(endpoint.other)
};
export async function details(id){
    return await api.get(endpoint.details(id))
};
export async function createFear(data){
    return await api.post(endpoint.create,data)
};
export async function editFear(id,data){
    return await api.put(endpoint.edit(id),data)
};
export function deleteFear(id){
    return api.del(endpoint.delete(id))
};
export function likeFear(id,data){
    return api.put(endpoint.like(id),data)
};

