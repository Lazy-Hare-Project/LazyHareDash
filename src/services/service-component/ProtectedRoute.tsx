import { Navigate, Outlet } from "react-router-dom";
import { checkedLoggedIn, logout } from "../auth.service";

function ProtectedRoute() {
    if(checkedLoggedIn()){
        return <Outlet/>
    }
    return (
        <Navigate to= {"/login"} />
    )
}
export default ProtectedRoute;


