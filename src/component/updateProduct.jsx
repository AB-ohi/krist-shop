import { useState } from "react";
import { motion } from "framer-motion";
import "./updateProduct.css";
import allProductHook from "../Hook/allProductHook";
import Swal from "sweetalert2";
const UpdateProduct = ({ editProduct, setEditProduct }) => {
  const [allProducts, setAllProducts] = allProductHook();
  if (!editProduct) {
    return null;
  }
  const [formData, setFormData] = useState({
    product_name: "",
    main_price: "",
    quantity: "",
    discount: "",
  });
  const isAnyFieldFilled = Object.values(formData).some(
    (val) => val.trim() !== ""
  );
  console.log("product", editProduct?._id);

  const handelUpdate = async (e) => {
    e.preventDefault();
    const from = e.target;
    const product_name = from.product_name.value;
    const main_price = from.main_price.value;
    const quantity = from.quantity.value;
    const discount = from.discount.value;
    const updateValue = {
      product_name: product_name || editProduct.product_name,
      main_price: main_price || editProduct.main_price,
      quantity: quantity || editProduct.quantity,
      discount: discount || editProduct.discount,
    };
    console.log(updateValue);
    await fetch(`http://localhost:5000/AllProduct/${editProduct?._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          const updatedProduct = {
            ...editProduct,
            ...updateValue,
          };
          setAllProducts((prev) =>
            prev.map((product) =>
              product._id === editProduct._id ? updatedProduct : product
            )
          );

          setEditProduct(null);
          setFormData({
            product_name: "",
            main_price: "",
            quantity: "",
            discount: "",
          });
        } else {
          console.log(error, "product cna not update");
        }
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="update_product_form"
    >
      <h2>Update Product: {editProduct?.product_name}</h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 1.5,
            },
          },
        }}
        style={{ display: "flex", gap: "20px" }}
      >
        {editProduct.images.length === 1 ? (
          <motion.img
            className="product_update_img"
            src={editProduct.images[0]}
            alt=""
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        ) : (
          editProduct?.images?.map((img, index) => {
            return (
              <motion.img
                className="product_update_img"
                key={index}
                src={img}
                alt={`product-${index}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              />
            );
          })
        )}
      </motion.div>
      <form onSubmit={handelUpdate} className="update_product_from">
        <label>
          Product Name:
          <input
            type="text"
            placeholder={editProduct.product_name}
            name="product_name"
            onChange={(e) => {
              const cleanedValue = e.target.value;
              setFormData({ ...formData, product_name: cleanedValue });
            }}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            placeholder={editProduct.main_price}
            inputMode="numeric"
            name="main_price"
            value={formData.main_price}
            onChange={(e) => {
              const changeValue = e.target.value.replace(/[^0-9]/g, "");
              setFormData({ ...formData, main_price: changeValue });
            }}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="text"
            placeholder={editProduct.quantity}
            inputMode="numeric"
            pattern="[0-9]*"
            name="quantity"
            value={formData.quantity}
            onChange={(e) => {
              const changeValue = e.target.value.replace(/[^0-9.]/g, "");
              setFormData({ ...formData, quantity: changeValue });
            }}
          />
        </label>
        <br />
        <label>
          Discount:
          <input
            type="text"
            placeholder={editProduct.discount}
            inputMode="numeric"
            pattern="[0-9]*"
            name="discount"
            value={formData.discount}
            onChange={(e) => {
              const changeValue = e.target.value.replace(/[^0-9.]/g, "");
              setFormData({ ...formData, discount: changeValue });
            }}
          />
        </label>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            className="update_btn"
            type="submit"
            disabled={!isAnyFieldFilled}
          >
            Update
          </button>
          <button className="cancel_btn" onClick={() => setEditProduct(null)}>
            cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default UpdateProduct;
