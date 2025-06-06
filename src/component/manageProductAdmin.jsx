import allProductHook from "../Hook/allProductHook";

const ManageProductAdmin = () => {
  const allProducts = allProductHook();
  console.log(allProducts);
  return (
    <div>
      <table>
        <thead>
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
              <tr style={{ backgroundColor: "pink" }} key={allProduct._id}>
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
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
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
