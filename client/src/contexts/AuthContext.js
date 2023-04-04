import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";
import * as userService from "../services/userService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage();
    let isAuthenticated;
    user ? isAuthenticated = true : isAuthenticated = false;
    const registerUser = async (data) => {
        try {
            const result = await userService.register(data)
            setUser(result);
            navigate('/fears');
        }
        catch (err) {
            throw err;
        }
    }

    const userLogin = async (data) => {
        try {
            const result = await userService.login(data)
            setUser(result);
            navigate(-1, { replace: true });
        }
        catch (err) {
            throw err;
        }
    };
    const userLogout = () => {
        setUser();
    };
    const userDelete = async (id) => {
        userService.deleteUser(id)
        document.body.classList.remove("modal-open");
        setUser();
        navigate('/login');
    };
    const editUser = async (data, UserId) => {
        try {
          await userService.editUser(UserId, data)
          setUser(data);
          navigate(`/profile`);
        }
        catch (err) {
          throw err
        }
      };
    const contextValues = {
        userLogin,
        userLogout,
        registerUser,
        userDelete,
        editUser,
        user,
        isAuthenticated,

    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );

}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};