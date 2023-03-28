import style from './Create.module.css'
import formStyles from '../../commonStyles/Form.module.css';
import buttonStyles from '../../commonStyles/button.module.css';

import { usePlaceContext } from '../../../contexts/PlaceContext';
import { useForm } from '../../../hooks/useForm';

export default function Create() {
    const { addFear } = usePlaceContext();
    const { values, onChangeHandler, onSubmit } = useForm({
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
        fear_other: false,
    }, addFear);
    
    return (
        <div className={formStyles.formBox}>
            <h2>Create Place</h2>
            <form onSubmit={onSubmit} >
                <div className={formStyles.userBox}>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        required=""
                        value={values.title}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="title">Title</label>
                </div>
                <div className={formStyles.userBox}>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        required=""
                        value={values.city}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="city">City</label>
                </div>
                <div className={formStyles.userBox}>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required=""
                        value={values.latitude}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="latitude">Latitude</label>
                </div>
                <div className={formStyles.userBox}>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required=""
                        value={values.longitude}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="longitude">Longitude</label>
                </div>
                <div className={formStyles.userBox}>
                    <input
                        type="url"
                        name="website"
                        id="website"
                        required=""
                        value={values.website}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="website">Website</label>
                </div>
                <div className={formStyles.userBox}>
                    <input
                        className={style.imgBox}
                        accept="image/*"
                        type="file"
                        name="image"
                        id="image"
                        required=""
                        // value={values.image}
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
                    />
                    <label htmlFor="description" >Description</label>
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
                <div className={formStyles.btns}>
                    <button className={buttonStyles.redBtn}>
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