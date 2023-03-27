import styles from './ContactUs.module.css';
import classes from '../commonStyles/button.module.css';
export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    Sofia, Bulgaria
                </p>
                <p>
                    <i class="fa-solid fa-phone"></i>
                    +3590000000
                </p>
                <p>
                    <i class="fa-solid fa-envelope"></i>
                    fear@nofear.com
                </p>
            </div>
            <div className={styles.info}>
                <h2>Contact us</h2>
                <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" />
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" id="message" />
                    <button className={classes.redBtn}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Send</button>
                </form>
            </div>

        </div>
    );
};