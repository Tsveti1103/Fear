import styles from './Home.module.css';
import cardStyles from '../commonStyles/AllPlaces.module.css';
import { Link } from 'react-router-dom';
import { usePlaceContext } from '../../contexts/PlaceContext';
import { useAuthContext } from '../../contexts/AuthContext';
import Card from '../Places/Card/Card';
export default function Home() {
    const { getTopFears } = usePlaceContext();
    let topFears = getTopFears();
    const { user } = useAuthContext();
    return (
        <>
            {user ?
                <>
                    {topFears.length > 0 ?
                        <>
                        <h1 className={styles.heading}>Top three most liked fears</h1>
                        <ul className={cardStyles.cards}>
                            {topFears.map(fear => <Card key={fear.id} fear={fear} />)}
                        </ul>
                        </>
                        :
                        <p className={cardStyles.noFears}>No fears created</p>
                    }
                </>
                :
                <div className={styles.container}>
                    <Link to="/Login">Are you ready to conquer fear?</Link>
                </div>
            }
        </>
    );
};