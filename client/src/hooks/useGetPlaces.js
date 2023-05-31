import useFetcher from './useFetcher';
import { usePaginate } from './usePaginate';

export function useGetPlaces(response, dep) {
    const data = useFetcher(response, dep)
    const fears = data[0]
    const isLoad = data[2]
    return usePaginate(fears, isLoad)

};