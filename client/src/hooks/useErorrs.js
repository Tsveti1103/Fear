import { useState } from "react";

export default function useErrors(values, password) {
    const [formErrors, setFormErros] = useState(values);
    const formValidate = (e) => {
        const value = e.target.value;
        const errors = {};
        const name = e.target.name
        // general
        if (name !== 'image' && value.length < 1) {
            errors[name] = "This field is required"
        } else if (value.length >= 1) {
            errors[name] = ''
        }

        // login and register
        if (name === 'username') {
            if (value.length < 3 || value.length > 30) {
                errors.username = 'Username name should be between 3 and 30 characters.';
            }
        }
        if (name === 'password') {
            if (value.length < 8) {
                errors.password = 'This password must contain at least 8 characters.';
            }
            if([...value].every(c => '0123456789'.includes(c))){
                errors.password = 'Password cannot contain only numbers';
            }
        }
        if (name === 'email') {
            if (!value.includes('@') || !value.includes('.')) {
                errors.email = 'Enter a valid email address.';
            }
        }
        if (name === 'confirmPassword') {
            if (value !== password) {
                errors.confirmPassword = 'Passwords do not match.'
            }
        }

        // Create and Edit
        if (name === 'latitude') {
            if (Number(value) < -90 || Number(value) > 90) {
                errors.latitude = 'The latitude value must be between -90 and 90.';
            }
        }
        if (name === 'longitude') {
            if (Number(value) < -180 || Number(value) > 180) {
                errors.longitude = 'The latitude value must be between -180 and 180.';
            }
        }
        if (name === 'title') {
            if (value.length > 30) {
                errors.title = 'Title should be between 1 and 30 characters.';
            }
        }
        if (name === 'website') {
            if (!value.startsWith('http://') && !value.startsWith('https://')) {
                errors.website = 'Website must start with https:// or http://.';
            }
        }
        setFormErros(state => ({ ...state, ...errors }));
    };
    return [formErrors, formValidate]
}