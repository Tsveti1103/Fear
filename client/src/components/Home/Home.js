import styles from './Home.module.css';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
            <div className={styles.container}>
                <Link to="/Login">Are you ready to conquer fear?</Link>
            </div>
    );
};