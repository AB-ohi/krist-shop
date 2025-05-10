import Swal from "sweetalert2";
import useUserData from "../../Hook/useUserData";
import "./ManageUser.css";

const ManageUser = () => {
  const { AllUser } = useUserData();
  console.log(AllUser);
  const handelToChangeRole = (_id, currentRole) => {
    const updateRole = currentRole === "admin" ? "customer" : "admin";
    Swal.fire({
      title: `Change role to "${updateRole}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/by-id/${_id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ role: updateRole }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User List</h1>
      <div style={{ overflowX: "scroll" }}>
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
              <tr
                className="manage_user_table_data"
                style={{ textAlign: "center" }}
                key={allUser._id}
              >
                <td>{index + 1}</td>
                <td>{allUser.profileIDName}</td>
                <td>{allUser.email}</td>
                <td>{allUser.phoneNumber}</td>
                <td>{allUser.role}</td>

                <td style={{ borderRight: "2px solid #6A42C7" }}>
                  <button
                    onClick={()=> handelToChangeRole(allUser._id,allUser.role)}
                    className="role_change_btn"
                  >
                    Make {allUser.role === "admin" ? "Customer" : "Admin"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageUser;
