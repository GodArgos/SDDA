import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({children, isAllowed, redirectTo="/"}){
    console.log("isAllowed value:", isAllowed);
    if(!isAllowed){
        return <Navigate to={redirectTo} replace/>
    }
    return children ? children: <Outlet/>;
}