import Card from '../components/Places/Card/Card';
import styles from '../components/commonStyles/AllPlaces.module.css';
import useFetcher from './useFetcher';


export function useGetPlaces(response, dep) {
    console.log(response);
    const [fears] = useFetcher(response, dep)
    return (
        <>
            {fears.length>0 ?
                <ul className={styles.cards}>
                    {fears.map(fear => <Card key={fear.id} fear={fear} />)}
                </ul>
                :
                <p className={styles.noFears}>No fears created</p>
            }
        </>
    );
};