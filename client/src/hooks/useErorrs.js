import { useState } from "react";

export default function useErrors(values){
    const [formErrors, setFormErros] = useState(values);
    const formValidate = (e) => {
        const value = e.target.value;
        const errors = {};
        const name = e.target.name
        console.log(name);
        if (value.length < 1){
            errors.name = "This field is required"
        }
        if (name === 'username' && (value.length < 3 || value.length > 30)) {
            errors.username = 'Username name should be between 3 and 30 characters.';
        } 

        if (name === 'email' && (!value.includes('@'))) {
            errors.email = 'Enter a valid email address.';
        }
        if(name === 'latitude' && (Number(value) < -90 || Number(value) > 90)){
            errors.latitude = 'The latitude value must be between -90 and 90.';
        }
        if(name === 'longitude' && (Number(value) < -180 || Number(value) > 180)){
            errors.longitude = 'The latitude value must be between -180 and 180.';
        }
        if (name === 'title' && (value.length < 1 || value.length > 30)) {
            errors.title = 'Title should be between 1 and 30 characters.';
        } 

        setFormErros(errors);
        console.log(errors);
    };
    return [formErrors, setFormErros,formValidate]
}