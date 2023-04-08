import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import style from './Edit.module.css'
import formStyles from '../../commonStyles/Form.module.css';
import buttonStyles from '../../commonStyles/button.module.css';

import * as itemService from "../../../services/itemService";
import { usePlaceContext } from '../../../contexts/PlaceContext';
import { useForm } from '../../../hooks/useForm';
import { formIsValid } from '../../../services/utils';
import useErrors from '../../../hooks/useErorrs';

export default function Edit() {
    const { editFear } = usePlaceContext();
    const { fearId } = useParams();
    const { values, onChangeHandler, onSubmit, changeValues, serverErrors } = useForm({
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
    }, editFear, fearId);

    const [formErrors, formValidate] = useErrors(
        {
            title: '',
            city: '',
            latitude: '',
            longitude: '',
            website: '',
            description: '',
        }
    );
    useEffect(() => {
        itemService.details(fearId)
            .then(result => {
                changeValues(result);
            });
    }, [fearId]);
    let isValid = formIsValid(formErrors)
    return (
        <div className={formStyles.formBox}>
            <h2>Edit Place</h2>
            <form onSubmit={onSubmit} method="post">
                <div className={formStyles.userBox}>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        required=""
                        value={values.title}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.title ?
                        <>
                            <label htmlFor="title">Title</label>
                            <p className={formStyles.formError}>
                                {formErrors.title}
                            </p>
                        </>
                        : <label htmlFor="title" className={formStyles.isvalid}>Title</label>
                    }
                </div>

                <div className={formStyles.userBox}>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        required=""
                        value={values.city}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.city ?
                        <>
                            <label htmlFor="city">City</label>
                            <p className={formStyles.formError}>
                                {formErrors.city}
                            </p>
                        </>
                        : <label htmlFor="city" className={formStyles.isvalid}>City</label>
                    }
                </div>

                <div className={formStyles.userBox}>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required=""
                        value={values.latitude}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.latitude ?
                        <>
                            <label htmlFor="latitude">Latitude</label>
                            <p className={formStyles.formError}>
                                {formErrors.latitude}
                            </p>
                        </>
                        : <label htmlFor="latitude" className={formStyles.isvalid}>Latitude</label>
                    }
                </div>

                <div className={formStyles.userBox}>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required=""
                        value={values.longitude}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.longitude ?
                        <>
                            <label htmlFor="longitude">Longitude</label>
                            <p className={formStyles.formError}>
                                {formErrors.longitude}
                            </p>
                        </> :
                        <label htmlFor="longitude" className={formStyles.isvalid}>Longitude</label>

                    }
                </div>

                <div className={formStyles.userBox}>
                    <input
                        type="url"
                        name="website"
                        id="website"
                        required=""
                        value={values.website}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.website ?
                        <>
                            <label htmlFor="website" >Website</label>
                            <p className={formStyles.formError}>
                                {formErrors.website}
                            </p>
                        </>
                        : <label htmlFor="website" className={formStyles.isvalid}>Website</label>
                    }
                </div>

                <div className={formStyles.userBox}>
                    <input
                        className={style.imgBox}
                        accept="image/*"
                        type="file"
                        name="image"
                        id="image"
                        required=""
                        defaultValue={values.image}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="image">Image</label>
                </div>
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
                        required=""
                        value={values.description}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                      {formErrors.description ?
                        <>
                            <label htmlFor="description">Description</label>
                            <p className={formStyles.formError}>
                                {formErrors.description}
                            </p>
                        </>
                        : <label htmlFor="description" className={formStyles.isvalid}>Description</label>
                    }
                </div>

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