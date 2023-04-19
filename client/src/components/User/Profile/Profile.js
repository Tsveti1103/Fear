import styles from './Profile.module.css';
import Card from '../../Places/Card/Card'
import cardStyles from '../../commonStyles/AllPlaces.module.css';
import simpleStyles from '../../commonStyles/simpleButton.module.css';
import { Link } from 'react-router-dom';
import Delete from '../Delete/Delete';
import { useAuthContext } from "../../../contexts/AuthContext";
import { usePlaceContext } from "../../../contexts/PlaceContext";
import useProfile from '../../../hooks/useProfile';

export default function Profile() {
    const { user } = useAuthContext();
    const { fears } = usePlaceContext();
    const [showCreatedFears, showLikedFears, createdFears, likedFears, onShowFearsClick] = useProfile(fears)

    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <Link to={`edit/`} title="Edit">
                    <i className="fa-solid fa-user-pen"></i>
                </Link>
                <Delete currentUser={user}></Delete>
            </div>
            <div className={styles.statistics}>
                <h1>{user.username}</h1>
                <h3>{user.email}</h3>
                <p>You have conquered {createdFears.length} fears</p>
                <p>You have {likedFears.length} favorite places of fear</p>
            </div>
            <div className={styles.btnContainer}>
                <button id='create' className={simpleStyles.simple} onClick={onShowFearsClick}>Show My Created Fears</button>
                <button id='like' className={simpleStyles.simple} onClick={onShowFearsClick}>Show My Liked Fears</button>
            </div>
            <div className={styles.userFears} style={{ display: showCreatedFears ? 'flex' : 'none' }}>
                <h1>Created Fears:</h1>
                {createdFears.length > 0 ?
                    <>
                        <ul className={cardStyles.cards}>
                            {createdFears.map(fear => <Card key={fear.id} fear={fear} />)}
                        </ul>
                    </>
                    :
                    <p className={cardStyles.noFears}>No fears created</p>
                }
            </div>
            <div className={styles.userFears} style={{ display: showLikedFears ? 'flex' : 'none' }}>
                <h1>Liked Fears:</h1>
                {likedFears.length > 0 ?
                    <ul className={cardStyles.cards}>
                        {likedFears.map(fear => <Card key={fear.id} fear={fear} />)}
                    </ul>
                    :
                    <p className={cardStyles.noFears}>No fears liked</p>
                }
            </div>
        </div>
    );
};
