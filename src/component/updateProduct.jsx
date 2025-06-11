import { useState } from "react";
import "./updateProduct.css";
const UpdateProduct = ({ editProduct, setEditProduct }) => {
  if (!editProduct) {
    return null;
  }

  console.log("product", editProduct?._id);
  return (
    <div className="update_product_form">
      <h2>Update Product: {editProduct?.product_name}</h2>
      <p>Id: {editProduct?._id}</p>
      <form className="update_product_from">
        <label>
          Product Name:
          <input type="text" placeholder={editProduct.product_name} />
        </label>
        <br />
        <label>
          Price:
          <input
              onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                      }}
            type="text"
            placeholder={editProduct.main_price}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
           onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                      }}
            type="text"
            placeholder={editProduct.quantity}
          />
        </label>
        <br />
        <label>
          Discount:
          <input
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9.]/g, "");
            }}
            type="text"
            placeholder={editProduct.discount}
          />
        </label>
      </form>
      <div>
        <button type="submit">Update</button>
      <button onClick={() => setEditProduct(null)}>cancel</button>
      </div>
    </div>
  );
};

export default UpdateProduct;
