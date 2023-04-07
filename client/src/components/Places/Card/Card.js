import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import styles from './Card.module.css';
import simpleStyles from '../../commonStyles/simpleButton.module.css';


export default function Card({fear}) {
    const { user } = useAuthContext();
    
    return (
        <div className={styles.card}>
            <h1>{fear.title}</h1>
            <div className={styles.img} style={{backgroundImage :`url(${fear.image})`}} alt="" />
            <p>Description: {fear.description.split(' ').slice(0, 10).join(" ") + "..."}</p>
            {user? <Link className={simpleStyles.simple} to={`/fears/${fear.id}`} >Details</Link> : <Link to={`/login`} >Details</Link>}
        </div>
    )
}