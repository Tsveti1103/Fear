import { Link } from 'react-router-dom';
import formStyles from '../../commonStyles/Form.module.css';
import buttonStyles from '../../commonStyles/button.module.css';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';

export default function Register() {
    const { registerUser } = useAuthContext();
    const { values, onChangeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, registerUser);
    
    return (
        <div className={formStyles.formBox}>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <div className={formStyles.userBox}>
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
                <div className={formStyles.userBox}>
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
                <div className={formStyles.userBox}>
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
                <div className={formStyles.userBox}>
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
                <div className={formStyles.btns}>
                    <button type="submit" className={buttonStyles.redBtn}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Register
                    </button>
                    <Link to="/login" className={formStyles.signUpIn}>Sign In?</Link>
                </div>
            </form >
        </div >
    );
};