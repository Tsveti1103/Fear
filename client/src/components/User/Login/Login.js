import { Link } from 'react-router-dom';
import formStyles from '../../commonStyles/Form.module.css';
import buttonStyles from '../../commonStyles/button.module.css';
import { useAuthContext } from "../../../contexts/AuthContext";
import { useForm } from '../../../hooks/useForm';
import useErrors from '../../../hooks/useErorrs';
import { formIsValid } from '../../../services/utils';

export default function Login() {
    const { userLogin } = useAuthContext();
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm({
        username: '',
        password: '',
    }, userLogin);

    const [formErrors, formValidate] = useErrors(
        {
            username: '',
            password: '',
        }
    );
    let isValid = formIsValid(formErrors)
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
                        onBlur={formValidate}
                    />
                    <label htmlFor="username">Username</label>
                </div>
                {formErrors.username &&
                    <p className={formStyles.formError}>
                        {formErrors.username}
                    </p>
                }
                <div className={formStyles.userBox}>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required=""
                        value={values.password}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                {formErrors.password &&
                    <p className={formStyles.formError}>
                        {formErrors.password}
                    </p>
                }
                {serverErrors &&
                    <p className={formStyles.formError}>{serverErrors}</p>
                }
                <div className={formStyles.btns}>
                    <button type="submit" className={buttonStyles.redBtn} disabled={!isValid}>
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