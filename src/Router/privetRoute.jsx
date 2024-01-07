import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    console.log(user)
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' state={{from: location}} replace={true}>
        </Navigate>
    );
};

export default PrivetRoute;