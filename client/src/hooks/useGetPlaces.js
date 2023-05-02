import useFetcher from './useFetcher';
import { usePaginate } from './usePaginate';

export function useGetPlaces(response, dep) {
    const [fears] = useFetcher(response, dep)
    return usePaginate(fears)
    
};