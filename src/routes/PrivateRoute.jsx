import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/useAuth";



const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();

    if(loading){
        return <span className="loading loading-ring w-[200px] flex justify-center items-center mt-16 mx-auto"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} replace={true} to="/login"></Navigate>
};


export default PrivateRoute;