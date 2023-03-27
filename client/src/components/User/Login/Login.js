import styles from '../../commonStyles/Form.module.css';
import classes from '../../commonStyles/button.module.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

import { useAuthContext } from "../../../contexts/AuthContext";

export default function Login() {
    const { userLogin } = useAuthContext();
    const [values, setValues] = useState({
        username: '',
        password: '',
    });
    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        userLogin(data);
    };
    return (
        <div className={styles.formBox}>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div className={styles.userBox}>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        required=""
                        value={values.username}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className={styles.userBox}>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required=""
                        alue={values.password}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className={styles.btns}>
                    <button type="submit" className={classes.redBtn}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Login
                    </button>
                    <Link to="/register" className={styles.signUpIn}>Sign Up?</Link>
                </div>
            </form >
        </div >
    );
};