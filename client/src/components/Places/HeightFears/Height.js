import * as itemService from "../../../services/itemService";
import { useGetPlaces } from "../../../hooks/useGetPlaces";

export default function Height() {
    const fears = useGetPlaces(itemService.getHeight,[])
    return fears}