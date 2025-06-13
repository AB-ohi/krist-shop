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
      {
        editProduct.images.length === 1 ?(
          <img src={editProduct.images[0]} alt="" />
        ):(
          editProduct?.images?.map((img, index)=>{
           return <img key={index} src={img} alt={`product-${index}`}/>
          }) 
        )
      }
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
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button className="update_btn" type="submit">
          Update
        </button>
        <button className="cancel_btn" onClick={() => setEditProduct(null)}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
