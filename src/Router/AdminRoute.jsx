import userRoleHook from "../Hook/userRoleHook"
import adminLoading from '../../public/img/admin_loding.gif'
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { Navigate } from "react-router-dom"

const AdminRoute = ({children}) => {
    const userRole = userRoleHook()
    const [showError,setShowError]= useState()
   
   useEffect(()=>{
    if(userRole && userRole.role !=='admin'){
        Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: 'You are not an admin!',
            confirmButtonColor: '#d33',
        });
        setShowError(true);
    }
   },[userRole])
   if (!userRole) {
    return <div style={{margin:'auto'}}>
        <img style={{ height:'40%'}} src={adminLoading} alt="" />
    </div>;
}
   if (showError) {
    return <Navigate to="/" />; 
}
    if(userRole.role == "admin"){
        return(children)
    }
}
export default AdminRoute