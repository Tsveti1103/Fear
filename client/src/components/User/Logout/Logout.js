import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from "../../../contexts/AuthContext";
import * as userService from "../../../services/userService";

export default function Logout  () {
    const navigate = useNavigate();
    const { userLogout } = useAuthContext();
    useEffect(() => {
        userService.logout()
            .then(() => {
                userLogout();
                navigate('/login');
            })
            .catch(() => {
                navigate('/');
            });
    });

    return null;
}
