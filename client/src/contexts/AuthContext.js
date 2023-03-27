import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "../services/utils";
import  useLocalStorage  from "../hooks/useLocalStorage";
import * as userService from "../services/userService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage('user', {});
    // const userLogin = (user) => {
    //     setUser(user);
    //     navigate('/fears');
    //   };
    const registerUser = async(data) => {
        const {
            username,
            email,
            password,
            confirmPassword,
        } = Object.fromEntries(data);
        if (password !== confirmPassword) {
            console.log('Password dont mach');
            return;
            // TODO return error
        }
        try{
            await userService.register(data)
            const result = await userService.login(data);
            setUser(result);
            navigate('/fears');
        }catch(err){
            console.log(err.message);
        }
    }
    const userLogin = async(data) => {
        try{
            const result = await  userService.login(data)
            setUser(result);
            navigate('/fears');
        }
        catch(err){
            console.log(err.message);
        }
      };
      const userLogout = () => {
        setUser();
      };
      const contextValues = {
        userLogin,
        userLogout,
        registerUser,
        user,
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