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
}

export async function getAllFears(){
    return api.get(endpoint.fears)
}
export async function getAnimals(){
    return api.get(endpoint.animals)
}
export async function getWater(){
    return api.get(endpoint.water)
}
export async function getHeight(){
    return api.get(endpoint.height)
}
export async function getOther(){
    return api.get(endpoint.other)
}
export async function createFear(data){
    return api.post(endpoint.create,data)
}

export async function details(id){
    return api.get(endpoint.details(id))
}

export async function deleteFear(id){
    return api.del(endpoint.delete(id))
}

export async function editFear(id,data){
    return api.put(endpoint.edit(id),data)
}

export async function getOne(id) {
    return api.get(endpoint.details(id))
    
};
