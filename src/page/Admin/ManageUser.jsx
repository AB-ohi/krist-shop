import Swal from "sweetalert2";
import useUserData from "../../Hook/useUserData";
import "./ManageUser.css";
import { useForm } from "react-hook-form";

const ManageUser = () => {
  const { AllUser } = useUserData();
  const { reset } = useForm();
  console.log(AllUser);
  const handelToChangeRole = (_id, newRole) => {
    Swal.fire({
      title: `Change role to "${newRole}"?`,
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
          body: JSON.stringify({ role: newRole }),
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
            reset();
            window.location.reload();
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
                  <select
                    defaultValue=""
                    onChange={(e) => {
                      if (e.target.value) {
                        handelToChangeRole(allUser._id, e.target.value);
                      }
                    }}
                    className="role_change_dropdown"
                  >
                    <option className="role_option" value="" disabled>
                      Change Role
                    </option>

                    {["admin", "customer", "shop owner", "outlet", "manager"]
                      .filter((role) => role !== allUser.role) 
                      .map((role) => (
                        <option key={role} value={role}>
                          {role.charAt(0).toUpperCase() + role.slice(1)}
                        </option>
                      ))}
                  </select>
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
