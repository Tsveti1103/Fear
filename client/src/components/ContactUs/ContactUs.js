import styles from './ContactUs.module.css';
import buttonStyles from '../commonStyles/button.module.css';
import * as userService from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import useErrors from '../../hooks/useErorrs';
import { formIsValid } from '../../services/utils';
import { useState } from 'react';

export default function ContactUs() {
    const [show, setShow] = useState(false)
    const addContactUs = async (data) => {
        try {
            await userService.contactUser(data)
            setShow(true)
            setTimeout(() => {
                setShow(false);
                navigate('/');
            }, 3000);
        }
        catch (err) {
            throw err
        }
    };
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm({
        email: '',
        subject: '',
        message: '',
    }, addContactUs);
    const [formErrors, formValidate] = useErrors(
        {
            email: '',
            subject: '',
            message: '',
        });
    const navigate = useNavigate();

    let isValid = formIsValid(formErrors)
    return (
        <div className={styles.container}>
            {show && <div className={styles.modal}> <h1>Thank you for contacting us!</h1></div>}
            <div className={styles.img}>
                <p>
                    <i className="fa-solid fa-location-dot"></i>
                    Sofia, Bulgaria
                </p>
                <p>
                    <i className="fa-solid fa-phone"></i>
                    +3590000000
                </p>
                <p>
                    <i className="fa-solid fa-envelope"></i>
                    fear@nofear.com
                </p>
            </div>
            <div className={styles.info}>
                <h2>Contact us</h2>
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.email &&
                        <p className={styles.formError}>
                            {formErrors.email}
                        </p>
                    }
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={values.subject}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.subject &&
                        <p className={styles.formError}>
                            {formErrors.subject}
                        </p>
                    }
                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        id="message"
                        value={values.message}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.message &&
                        <p className={styles.formError}>
                            {formErrors.message}
                        </p>
                    }
                    {serverErrors &&
                        <p className={styles.formError}>{serverErrors}</p>
                    }
                    <button type="submit" className={buttonStyles.redBtn} disabled={!isValid}>
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