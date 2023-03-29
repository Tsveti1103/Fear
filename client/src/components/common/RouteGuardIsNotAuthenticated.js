import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

export default function RouteGuardIsNotAuthenticated({
    children,
}){
    const { isAuthenticated } = useAuthContext();
    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children ? children : <Outlet />
};

