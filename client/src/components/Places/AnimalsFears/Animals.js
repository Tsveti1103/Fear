import {useGetPlaces} from "../../../hooks/useGetPlaces"
import * as itemService from "../../../services/itemService";


export default function Animals() {
    const fears = useGetPlaces(itemService.getAnimals,[])
    return fears}