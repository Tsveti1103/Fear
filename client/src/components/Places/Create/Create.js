import style from './Create.module.css'
import formStyles from '../../commonStyles/Form.module.css';
import buttonStyles from '../../commonStyles/button.module.css';
import useErrors from '../../../hooks/useErorrs';
import { usePlaceContext } from '../../../contexts/PlaceContext';
import { useForm } from '../../../hooks/useForm';
import { formIsValid } from '../../../services/utils';

export default function Create() {
    const { addFear } = usePlaceContext();
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm({
        title: '',
        city: '',
        latitude: 0,
        longitude: 0,
        website: '',
        image: null,
        cost_free: false,
        description: '',
        fear_water: false,
        fear_height: false,
        fear_animals: false,
        fear_other: true,
    }, addFear);

    const [formErrors, formValidate] = useErrors(
        {
            title: '',
            city: '',
            latitude: '',
            longitude: '',
            website: '',
            description: '',
            image: 'Please choose an image',
        }
    );
    let isValid = formIsValid(formErrors)
    return (
        <div className={formStyles.formBox}>
            <h2>Create Place</h2>
            <form onSubmit={onSubmit} method="post" >
                <div className={formStyles.userBox}>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        value={values.title}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="title">Title</label>
                </div>
                {formErrors.title &&
                    <p className={formStyles.formError}>
                        {formErrors.title}
                    </p>
                }
                <div className={formStyles.userBox} >
                    <input
                        type="text"
                        name="city"
                        id="city"
                        required
                        value={values.city}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="city">City</label>
                </div>
                {formErrors.city &&
                    <p className={formStyles.formError}>
                        {formErrors.city}
                    </p>
                }
                <div className={formStyles.userBox}>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required
                        value={values.latitude}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="latitude">Latitude</label>
                </div>
                {formErrors.latitude &&
                    <p className={formStyles.formError}>
                        {formErrors.latitude}
                    </p>
                }
                <div className={formStyles.userBox}>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        value={values.longitude}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="longitude">Longitude</label>
                </div>
                {formErrors.longitude &&
                    <p className={formStyles.formError}>
                        {formErrors.longitude}
                    </p>
                }
                <div className={formStyles.userBox} >
                    <input
                        type="url"
                        name="website"
                        id="website"
                        required
                        value={values.website}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="website">Website</label>
                </div>
                {formErrors.website &&
                    <p className={formStyles.formError}>
                        {formErrors.website}
                    </p>
                }
                <div className={formStyles.userBox}>
                    <input
                        className={style.imgBox}
                        accept="image/*"
                        type="file"
                        name="image"
                        id="image"
                        required
                        defaultValue={values.image}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="image">Image</label>
                </div>
                {formErrors.image &&
                    <p className={formStyles.formError}>
                        {formErrors.image}
                    </p>
                }
                <div className={style.check}>
                    <label htmlFor="cost">Cost Free</label>
                    <input
                        type="checkbox"
                        name="cost_free"
                        id="cost"
                        value={values.cost_free}
                        onChange={onChangeHandler}
                        checked={values.cost_free}
                    />
                </div>
                <div className={formStyles.userBox}>
                    <textarea
                        className={style.description}
                        name="description"
                        id="description"
                        required
                        value={values.description}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    <label htmlFor="description" >Description</label>
                </div>
                {formErrors.description &&
                    <p className={formStyles.formError}>
                        {formErrors.description}
                    </p>
                }
                <p className={style.paragraf}>Fears</p>

                <div className={style.check}>
                    <label htmlFor="water">Fear water</label>
                    <input
                        type="checkbox"
                        name="fear_water"
                        id="water"
                        value={values.fear_water}
                        onChange={onChangeHandler}
                        checked={values.fear_water}
                    />
                </div>
                <div className={style.check}>
                    <label htmlFor="height">Fear height</label>
                    <input
                        type="checkbox"
                        name="fear_height"
                        id="height"
                        value={values.fear_height}
                        onChange={onChangeHandler}
                        checked={values.fear_height}
                    />
                </div>
                <div className={style.check}>
                    <label htmlFor="animals">Fear animals</label>
                    <input
                        type="checkbox"
                        name="fear_animals"
                        id="animals"
                        value={values.fear_animals}
                        onChange={onChangeHandler}
                        checked={values.fear_animals}
                    />
                </div>
                <div className={style.check}>
                    <label htmlFor="other">Fear other</label>
                    <input
                        type="checkbox"
                        name="fear_other"
                        id="other"
                        value={values.fear_other}
                        onChange={onChangeHandler}
                        checked={values.fear_other}
                    />
                </div>
                {serverErrors? serverErrors.map(err => <p key={err} className={formStyles.formError}>{err}</p> ): <></>}
                <div className={formStyles.btns}>
                    <button className={buttonStyles.redBtn} disabled={!isValid}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Create
                    </button>
                </div>
            </form >
        </div >
    )
}