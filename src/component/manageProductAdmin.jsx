import allProductHook from "../Hook/allProductHook";
import './manageProductAdmin.css'

const ManageProductAdmin = () => {
  const allProducts = allProductHook();
  console.log(allProducts);
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
                  <button className="action_delete_btn">Delete</button>
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
