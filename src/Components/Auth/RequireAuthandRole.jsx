import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function RequireAuthAndRole({requiredRole='ADMIN'}){
    const {isLoggedIn,role} = useSelector((state)=>state.auth)
    return(
        isLoggedIn ? role === requiredRole ? <Outlet/> : <Navigate to="/auth/signup"/> : <Navigate to="/auth/login"/>
    )
}

export default RequireAuthAndRole