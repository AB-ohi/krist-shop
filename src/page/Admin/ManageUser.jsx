import useUserData from "../../Hook/useUserData"

const ManageUser = () =>{
    const {AllUser}= useUserData()
    console.log(AllUser)
    
    return(
        <div style={{marginLeft:'20px'}}>
            <h1>User List</h1>
            <table>
                <tr>
                    <th>User NO</th>
                    <th>User Name</th>
                    <th>User Mail</th>
                    <th>User Phone</th>
                    <th>User Id</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                    {
                        AllUser.map((allUser)=>(
                                <tr key={allUser._id}>

                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ManageUser