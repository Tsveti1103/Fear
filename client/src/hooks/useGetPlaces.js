import Card from '../components/Places/Card/Card';
import styles from '../components/commonStyles/AllPlaces.module.css';
import { useFetcher } from './useFetcher';


export function useGetPlaces(response,dep) {
    const [fears,setFears] = useFetcher(response,dep)
    return (
        <ul className={styles.cards}>
            {fears?.map(fear => <Card key={fear.id} fear={fear} /> )}
        </ul>
        );
};