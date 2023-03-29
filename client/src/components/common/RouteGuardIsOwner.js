import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { usePlaceContext } from '../../contexts/PlaceContext';



export default function RouteGuardIsOwner({
    children,
}) {
    const { fearId } = useParams();
    const { user } = useAuthContext();
    const {getFear} = usePlaceContext();
    const currentFear = getFear(fearId)
    if (currentFear && currentFear.user !== user.user_id) {
        return <Navigate to={`/fears/${fearId}`} replace />
    }

    return children ? children : <Outlet />
};