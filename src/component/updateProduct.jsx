import { useState } from 'react';
import './updateProduct.css'
const UpdateProduct = ( {editProduct, setEditProduct}) => {
  if (!editProduct) {
    return null; 
  }

  console.log("producr",editProduct?._id)
  return (
    <div className="update_product_form">
      <h2>Update Product: {editProduct?.product_name}</h2>
      <p>Id: {editProduct?._id}</p>
      <form className='update_product_from'>
        <label>
          Product Name:
          <input type="text" defaultValue={editProduct.product_name} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" defaultValue={editProduct.main_price} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" defaultValue={editProduct.quantity} />
        </label>
        <br />
        <label>
          Discount:
          <input type="number" defaultValue={editProduct.discount} />
        </label>
        <br />
        <label>
          Discount Price:
          <input type="number" defaultValue={editProduct.discount_price} />
        </label>
        <br />
      </form>
        <button type="submit">Update</button>
        <button onClick={()=>setEditProduct(null)}>cancel</button>
    </div>
  );
};

export default UpdateProduct;
