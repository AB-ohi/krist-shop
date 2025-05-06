import useUserData from "../../Hook/useUserData";
import './ManageUser.css'

const ManageUser = () => {
  const { AllUser } = useUserData();
  console.log(AllUser);

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User List</h1>
      <div style={{overflowX:'scroll'}}>
      <table className="manage_uaer_table_body">
        <tr className="ManageUser_table_header">
          <th>User NO</th>
          <th>User Name</th>
          <th>User Mail</th>
          <th>User Phone</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {AllUser.map((allUser, index) => (
            <tr className="manage_user_table_data" style={{textAlign:'center'}} key={allUser._id}>
                <td>{index+1}</td>
                <td>{allUser.profileIDName}</td>
                <td>{allUser.email}</td>
                <td>{allUser.phoneNumber}</td>
                <td>{allUser.role}</td>
                {
                    allUser?.role == 'admin'?(
                        <td style={{borderRight:'2px solid #6A42C7'}}><button className="role_change_btn">castomar</button></td>
                    ):(
                        <td style={{borderRight:'2px solid #6A42C7'}}><button className="role_change_btn">admin</button></td>
                    )
                }
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};
export default ManageUser;
