import { Link } from 'react-router-dom';
import formStyles from '../../commonStyles/Form.module.css';
import buttonStyles from '../../commonStyles/button.module.css';
import { useAuthContext } from "../../../contexts/AuthContext";
import { useForm } from '../../../hooks/useForm';

export default function Login() {
    const { userLogin } = useAuthContext();
    const { values, onChangeHandler, onSubmit } = useForm({
        username: '',
        password: '',
    }, userLogin);
    return (
        <div className={formStyles.formBox}>
            <h2>Login</h2>
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
                        type="password"
                        name="password"
                        id="password"
                        required=""
                        value={values.password}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className={formStyles.btns}>
                    <button type="submit" className={buttonStyles.redBtn}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Login
                    </button>
                    <Link to="/register" className={formStyles.signUpIn}>Sign Up?</Link>
                </div>
            </form >
        </div >
    );
};