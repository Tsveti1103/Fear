import { Link } from 'react-router-dom';
import formStyles from '../../commonStyles/Form.module.css';
import buttonStyles from '../../commonStyles/button.module.css';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';
import useErrors from '../../../hooks/useErorrs';
import { formIsValid } from '../../../services/utils';

export default function Register() {
    const { registerUser } = useAuthContext();
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, registerUser);
    const [formErrors, formValidate] = useErrors(
        {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }, values.password);
    let isValid = formIsValid(formErrors)
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
                        type="text"
                        name="email"
                        id="email"
                        required=""
                        value={values.email}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                {formErrors.email &&
                    <p className={formStyles.formError}>
                        {formErrors.email}
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
                <div className={formStyles.userBox}>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="repass"
                        required=""
                        value={values.confirmPassword}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="repass">Repeat Password</label>
                </div>
                {formErrors.confirmPassword &&
                    <p className={formStyles.formError}>
                        {formErrors.confirmPassword}
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
                        Register
                    </button>
                    <Link to="/login" className={formStyles.signUpIn}>Sign In?</Link>
                </div>
            </form >
        </div >
    );
};