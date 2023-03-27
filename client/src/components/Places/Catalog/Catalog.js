import styles from './Catalog.module.css';
import { Link } from 'react-router-dom';

export default function Catalog() {
    return (
        <>
            <div className={styles.cards}>
                <Link to='animals/' className={`${styles.card} ${styles.animals}`}>
                    <h2>Fear from animals</h2>
                </Link>
                <Link to='water/' className={`${styles.card} ${styles.water}`}>
                    <h2>Fear from water</h2>
                </Link>
                <Link to='height/' className={`${styles.card} ${styles.height}`}>
                    <h2>Fear from height</h2>
                </Link>
                <Link to='other/' className={`${styles.card} ${styles.other}`}>
                    <h2>Fear from other</h2>
                </Link>
                <Link to='all/' className={`${styles.card} ${styles.all}`}>
                    <h2 className={styles.black}>All fears</h2>
                </Link>
            </div>

        </>
    );
};