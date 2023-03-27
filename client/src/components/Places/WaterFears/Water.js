import {useGetPlaces} from "../../../hooks/useGetPlaces"
import * as itemService from "../../../services/itemService";


const baseUrl = 'http://localhost:8000/places/water/'

export default function Water() {
    const fears = useGetPlaces(itemService.getWater(),[])
    return fears}