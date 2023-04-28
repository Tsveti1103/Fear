import { Link } from 'react-router-dom';
import formStyles from '../../commonStyles/Form.module.css';
import buttonStyles from '../../commonStyles/button.module.css';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';
import useErrors from '../../../hooks/useErorrs';
import { formIsValid } from '../../../services/utils';

export default function Register() {
    const { registerUser, passwordShown, showPassword } = useAuthContext();
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
                    {formErrors.username ?
                        <>
                            <label htmlFor="username" >Username</label>
                            <p className={formStyles.formError}>
                                {formErrors.username}
                            </p>
                        </>
                        : <label htmlFor="username" className={formStyles.isvalid}>Username</label>
                    }
                </div>

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

                    {formErrors.email ?
                        <>
                            <label htmlFor="email" >Email</label>
                            <p className={formStyles.formError}>
                                {formErrors.email}
                            </p>
                        </>
                        : <label htmlFor="email" className={formStyles.isvalid}>Email</label>
                    }
                </div>
                <div className={formStyles.userBox}>
                <i className={`fa-solid fa-eye ${formStyles['show']}`} onClick={showPassword}></i>
                    <input
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        id="password"
                        required=""
                        value={values.password}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />

                    {formErrors.password ?
                        <>
                            <label htmlFor="password" >Password</label>
                            <p className={formStyles.formError}>
                                {formErrors.password}
                            </p>
                        </>
                        : <label htmlFor="password" className={formStyles.isvalid}>Password</label>
                    }
                </div>
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
                    {formErrors.confirmPassword ?
                        <>
                            <label htmlFor="repass" >Repeat Password</label>
                            <p className={formStyles.formError}>
                                {formErrors.confirmPassword}
                            </p>
                        </>
                        : <label htmlFor="repass" className={formStyles.isvalid}>Repeat Password</label>
                    }
                </div>
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