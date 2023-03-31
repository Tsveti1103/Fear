
export function getUserData() {
    return JSON.parse(localStorage.getItem('user'))
}

export function getAccessToken() {
    const user = getUserData();
    if (user) {
        return user.token;
    }
    else {
        return null
    }
}

export function clearUserData() {
    localStorage.removeItem('user')
}

export function setUserData(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function formIsValid(data) {
    for (let error in data) {
        if(data[error]!==''){
            return false;
        }
    }
    return true;
}

export function serverErrorTranslator(err){
    if (err == 'Unable to log in with provided credentials.') {
        err = 'Wrong username or password.'
    }
    else if (err == 'places with this title already exists.') {
        err = 'Place with this title already exists.'
    }
    else if(err=='The submitted data was not a file. Check the encoding type on the form.'){
        err='Please choose a image file to submit.'
    }
    return err
}