
import formStyles from '../../commonStyles/Form.module.css';
import buttonStyles from '../../commonStyles/button.module.css';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';
import { formIsValid } from '../../../services/utils';
import useErrors from '../../../hooks/useErorrs';
import { useEffect } from 'react';

export default function EditUser() {
    const { editUser, user } = useAuthContext();
    const id = user.user_id

    const { values, onChangeHandler, onSubmit, changeValues, serverErrors } = useForm({
        username: '',
        email: '',
    }, editUser, id);

    useEffect(() => {
        changeValues(user); 
    }, []);
    const [formErrors, formValidate] = useErrors(
        {
            username: '',
            email: '',
        });

    let isValid = formIsValid(formErrors)
    return (
        <div className={formStyles.formBox}>
            <h2>Edit Profile</h2>
            <form onSubmit={onSubmit} method="post">
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
                {serverErrors ? serverErrors.map(err => <p key={err} className={formStyles.formError}>{err}</p>) : <></>}
                <div className={formStyles.btns}>
                    <button className={buttonStyles.redBtn} disabled={!isValid}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Edit
                    </button>
                </div>
            </form >
        </div >
    )
}