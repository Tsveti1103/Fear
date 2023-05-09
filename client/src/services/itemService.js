import * as api from './api.js';
const endpoints = {
    fears: '/places/all',
    animals: '/places/animals',
    water: '/places/water',
    height: '/places/height',
    other: '/places/other',
    create: '/places/create',
    top: '/places/topplaces',
    details: (placeId)=> `/places/details/${placeId}`,
    delete: (placeId)=> `/places/delete/${placeId}`,
    edit: (placeId)=> `/places/edit/${placeId}`,
    like: (placeId)=> `/places/like/${placeId}`,
    userFears: '/places/userplaces',
    userLikedFears: '/places/userlikedplaces',
};

export async function getAllFears(){
    return await api.get(endpoints.fears)
};
export async function getAnimals(){
    return await api.get(endpoints.animals)
};
export async function getWater(){
    return await api.get(endpoints.water)
};
export async function getHeight(){
    return await api.get(endpoints.height)
};
export async function getOther(){
    return await api.get(endpoints.other)
};
export function topFears(){
    return api.get(endpoints.top)
};
export function getUserFears(){
    return api.get(endpoints.userFears)
};
export function getUserLikedFears(){
    return api.get(endpoints.userLikedFears)
};
export async function details(id){
    return await api.get(endpoints.details(id))
};
export async function createFear(data){
    return await api.post(endpoints.create,data)
};
export function deleteFear(id){
    return api.del(endpoints.delete(id))
};
export async function editFear(id,data){
    return await api.put(endpoints.edit(id),data)
};
export function likeFear(data,id){
    return api.put(endpoints.like(id),data)
};




