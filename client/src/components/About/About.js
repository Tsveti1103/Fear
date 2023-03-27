import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>About Us</h2>
                <p>
                    Everyone has their own fear. To overcome fear you have to face it.
                    We do not believe that there are fearless people. 
                    If you claim to be one - test yourself with our suggestions.
                </p>
                <p>
                    <q> The fears we don't face becomes our limits.</q>
                </p>
                <p>
                    <q>Becoming fearless isn't the point.
                        That's impossible. It's learning how to control your fear,
                        and how to be free from it.
                    </q>
                </p>
                <p>
                    <q>
                        Doubt kills more dreams  than failure ever will
                    </q>
                </p>
                <p>
                    <q>
                        Fear is only as deep as the mind allows.
                    </q>
                </p>
            </div>
            <div className={styles.img}></div>
        </div>
    );
};