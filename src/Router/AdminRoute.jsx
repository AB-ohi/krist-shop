import userRoleHook from "../Hook/userRoleHook"
import adminLoading from '../../public/img/admin_loding.gif'

const AdminRoute = ({children}) => {
    const userRole = userRoleHook()
    if (!userRole) {
        return <div style={{margin:'auto'}}>
            <img style={{ height:'40%'}} src={adminLoading} alt="" />
        </div>;
    }
    if(userRole.role ==! "admin"){
       return(
        <div>
        <h1 style={{width:'full', backgroundColor:'red'}}>
            you are not admin
        </h1>
    </div>
       )
    }
    if(userRole.role == "admin"){
        return(children)
    }
}
export default AdminRoute