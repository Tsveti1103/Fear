import {useGetPlaces} from "../../../hooks/useGetPlaces"
import * as itemService from "../../../services/itemService";

export default function Other() {
    const fears = useGetPlaces(itemService.getOther(),[])
    return fears}