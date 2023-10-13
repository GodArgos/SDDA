import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({children, isAllowed, redirectTo="/"}){
    if(!isAllowed){
        return <Navigate to={redirectTo} replace/>
    }
    return children ? children: <Outlet/>;
}