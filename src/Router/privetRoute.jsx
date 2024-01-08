import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    // const location = useLocation();

    
    if(user){
        return children
    }

    return <Navigate to='/login' ></Navigate>

};

export default PrivetRoute;