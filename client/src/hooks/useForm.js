import { useState } from 'react';
import { serverErrorTranslator } from '../services/utils';

export default function useForm (initialValues, onSubmitHandler, id) {
    const [values, setValues] = useState(initialValues);
    const [serverErrors, setServerErrors] = useState([]);
    
    const onChangeHandler = (e) => {

        const type = e.target.type
        let value = e.target.value
        if (type === 'checkbox') {
            value = e.target.checked
        }
        else if (type === 'file') {
            value = e.target.files[0]
        }
        setValues(state => ({ ...state, [e.target.name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (typeof values.image == "string") {
            delete values.image;
        }
        onSubmitHandler(values, id)
            .then()
            .catch((err) => {
                setServerErrors([])
                for (let value of Object.values(err)) {
                    value = serverErrorTranslator(value)
                    setServerErrors(state => ([...state, value]))
                }
            })
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        onChangeHandler,
        onSubmit,
        changeValues,
        serverErrors,
    };
};