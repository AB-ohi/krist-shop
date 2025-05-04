import userRoleHook from "../Hook/userRoleHook"

const AdminRoute = ({children}) => {
    const userRole = userRoleHook()
    if(userRole.role ==! admin){
       return(
        <div>
        <h1>
            you are not admin
        </h1>
    </div>
       )
    }
    if(userRole.role == admin){
        return(children)
    }
}
export default AdminRoute