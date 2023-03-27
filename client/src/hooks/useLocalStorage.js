import { useState } from "react";
import { clearUserData, getUserData, setUserData } from "../services/utils";

export default function useLocalStorage () {
    const [value, setValue] = useState(() => {
        return getUserData()
    });
    const setLocalStorageValue = (newValue) => {
        if (newValue){
            setUserData(newValue)
        }else{
            clearUserData()
        }
        setValue(newValue);
    };
    return [
        value,
        setLocalStorageValue,
    ];
}