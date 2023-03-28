import { useState } from 'react';
export const useForm = (initialValues, onSubmitHandler, id) => {

    const [values, setValues] = useState(initialValues);

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
        onSubmitHandler(values, id);
        setValues(initialValues);
    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        setValues(newValues);
    };

    return {
        values,
        onChangeHandler,
        onSubmit,
        changeValues,
    };
};