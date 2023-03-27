import styles from '../../commonStyles/Form.module.css';
import classes from '../../commonStyles/button.module.css';
import { Link } from 'react-router-dom';

import { useState } from "react";
import * as userService from "../../../services/userService";
import { useAuthContext } from '../../../contexts/AuthContext';
export default function Register() {
    const { registerUser } = useAuthContext();

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        const {
            username,
            email,
            password,
            confirmPassword,
        } = Object.fromEntries(data);
        if (password !== confirmPassword) {
            console.log('Password dont mach');
            return;
            // TODO return error
        }
        registerUser(data)
            // .then(authData => {
            //     console.log(authData)
            //     userService.login(authData);
            // });
    }
    return (
        <div className={styles.formBox}>
            <h2>Register</h2>
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
                        type="text"
                        name="email"
                        id="email"
                        required=""
                        value={values.email}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className={styles.userBox}>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required=""
                        value={values.password}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className={styles.userBox}>
                    <input
                     type="password" 
                     name="confirmPassword" 
                     id="repass" 
                     required="" 
                     value={values.confirmPassword}
                        onChange={onChangeHandler}
                     />
                    <label htmlFor="repass">Repeat Password</label>
                </div>
                <div className={styles.btns}>
                    <button type="submit" className={classes.redBtn}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Register
                    </button>
                    <Link to="/login" className={styles.signUpIn}>Sign In?</Link>
                </div>
            </form >
        </div >
    );
};