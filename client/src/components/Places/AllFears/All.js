import {useGetPlaces} from "../../../hooks/useGetPlaces"
import * as itemService from "../../../services/itemService";


export default function All() {
    const fears = useGetPlaces(itemService.getAllFears(),[])
    return fears
}