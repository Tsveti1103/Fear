import styles from './Home.module.css';
import spinnerStyle from '../commonStyles/Spinner.module.css'
import cardStyles from '../commonStyles/AllPlaces.module.css';

import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import * as itemService from "../../services/itemService";

import { useAuthContext } from '../../contexts/AuthContext';
import Card from '../Places/Card/Card';
import useFetcher from '../../hooks/useFetcher';

export default function Home() {
    const { user } = useAuthContext();
    const data = useFetcher(itemService.topFears);
    const topFears = data[0]
    const isLoad = data[2]
    return (
        <>
            {user ?
                <>
                    {isLoad ?
                        <>
                            {
                                topFears.length > 0 ?
                                    <>
                                        <h1 className={styles.heading}>Top three most liked fears</h1>
                                        <ul className={cardStyles.cards}>
                                            {topFears.map(fear => <Card key={fear.id} fear={fear} />)}
                                        </ul>
                                    </>
                                    : <p className={cardStyles.noFears}>No fears created</p>
                            }
                        </>
                        :
                        <ReactLoading className={spinnerStyle.spinner} type="spinningBubbles" color='red' height="8rem" width="8rem" />
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