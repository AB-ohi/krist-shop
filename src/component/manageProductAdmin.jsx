import Swal from "sweetalert2";
import allProductHook from "../Hook/allProductHook";
import "./manageProductAdmin.css";
import UpdateProduct from './updateProduct.jsx'
import { motion } from "framer-motion";

const ManageProductAdmin = () => {
  const [allProducts, setAllProducts] = allProductHook();
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
  const handelDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showClass: {
        popup: "animate__animated animate__fadeInDown animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp animate__faster",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/AllProduct/${productId._id}`, {
          method: "DELETE",
        })
        .then((response) => {
          if (response.ok) {
            setAllProducts((prev) =>
              prev.filter((product) => product._id !== productId._id)
            );
          }
        });
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
        <motion.tbody
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {allProducts?.map((allProduct) => {
            return (
              <motion.tr
                className="admin_manage_product_details"
                key={allProduct._id}
                variants={itemVariants}
              >
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
                  <button onClick={()=> updateSingleProduct(allProduct)} className="action_edit_btn">Edit</button>
                  <button
                    onClick={() => handelDelete(allProduct)}
                    className="action_delete_btn"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            );
          })}
        </motion.tbody>
      </table>
      <div>
        <UpdateProduct/>
      </div>
    </div>
  );
};

export default ManageProductAdmin;
