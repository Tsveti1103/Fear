import styles from './Profile.module.css';

export default function Profile() {
    return (
           <div className={styles.container}>
            <h1>Pesho</h1>
            <div className={styles.statistics}>
                <p>Conquered fears:</p>
                <p>Wanted:</p>
                <p>Favorite:</p>
            </div>
           </div>
    );
};