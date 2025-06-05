import allProductHook from "../Hook/allProductHook";

const ManageProductAdmin = () => {
  const allProducts = allProductHook();
  console.log(allProducts);
  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>User Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {allProducts?.map((allProduct) => {
            return (
            
                <tr style={{ display: "flex", alignItems: "center", gap: "10px" }}
                key={allProduct._id}>
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
                <td>
                    {allProduct.main_price}
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
