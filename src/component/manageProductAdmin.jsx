import Swal from "sweetalert2";
import allProductHook from "../Hook/allProductHook";
import "./manageProductAdmin.css";
import { motion } from "framer-motion";


const ManageProductAdmin = () => {
  const allProducts = allProductHook();
  console.log(allProducts);
  const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
  const handelDelete = (de) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const response = fetch(`http://localhost:5000/AllProduct/${de._id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <table className="admin_product_table">
        <thead className="admin_product_thead">
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Discount Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allProducts?.map((allProduct) => {
            return (
              <tr className="admin_manage_product_details" key={allProduct._id}>
                <td>
                  <img
                    style={{ width: "50px" }}
                    src={allProduct.images?.[0]}
                    alt=""
                  />
                </td>

                <td>
                  <p>{allProduct.product_name}</p>
                </td>
                <td>{allProduct.main_price}৳</td>
                <td>{allProduct.quantity}</td>
                <td>{allProduct.discount}%</td>
                <td>{allProduct.discount_price}৳</td>
                <td className="manage_product_admin_action_btn">
                  <button className="action_edit_btn">Edit</button>
                  <button onClick={handelDelete} className="action_delete_btn">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProductAdmin;
