import { Link } from "react-router-dom";
import "./DetailOfProduct.css";
import { useState } from "react";
import Swal from "sweetalert2";

const DetailOfProduct = ({ detail }) => {
  const [addProduct, setAddProduct] = useState(1);
  const [direction, setDirection] = useState("");

  const increase = () => {
    setDirection("up");
    setTimeout(() => {
      setAddProduct((prev) => Math.max(1, prev + 1));
      setDirection("");
    }, 200);
  };

  const decrease = () => {
    if (addProduct > 1) {
      setDirection("down");
      setTimeout(() => {
        setAddProduct((prev) => prev - 1);
        setDirection("");
      }, 200);
    }
  };
const handleAddToCart =()=>{
  let cart = JSON.parse(localStorage.getItem("cart"))||[];
  const existingItems = cart.findIndex((item)=> item._id === detail._id);
  if (existingItems >=  0){
    const addedPrice =
      detail.discount > 0
        ? detail.discount_price * addProduct
        : detail.main_price * addProduct;


    cart [existingItems].quantity += addProduct;
    cart [existingItems].total_price +=addedPrice;

  }else{
    const newProduct ={
        _id: detail._id,
        product_name: detail.product_name,
        main_price: detail.discount > 0 ? detail.discount_price  : detail.main_price,
        total_price: detail.discount > 0 ? detail.discount_price * addProduct : detail.main_price * quantity,
        quantity: addProduct,
        discount: detail.discount,
        image:detail.images,
        category:detail.category
    };
    cart.push(newProduct)
  }
  Swal.fire({
    title: "✅ Product added to cart!",
    html: `
    <div style="text-align:left">
    <p><strong>Product:</strong> ${detail.product_name}</p>
    <p><strong>Price:</strong> ${
      detail.discount > 0 ? detail.discount_price * addProduct : detail.main_price * quantity
    }৳</p>
    <p><strong>Quantity:</strong> ${addProduct}</p>
    ${
      detail.discount > 0
      ? `<p><strong>Discount:</strong> ${detail.discount}%</p>`
      : ""
    }
    </div>
    `,
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    background: "#fff",
    customClass: {
      popup: "popup-style",
    },
  }
).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
}

  return (
    <div className="detailAria">
      <p className="product_name">{detail.product_name}</p>
      <p className="product_detail">{detail.product_detail}</p>
      <div className="product_price">
        {detail?.discount > 0 ? (
          <div>
            <div className="Discount_price_all_detail">
              <span className="old_price">{detail.main_price}৳</span>
              <span className="discount_price">{detail.discount_price}৳</span>
            </div>
            <p className="discount_tag">Discount: {detail.discount}%</p>
          </div>
        ) : (
          <div className="normal_price">Price: {detail.main_price}৳</div>
        )}
      </div>

      <div className="product_specs">
        {detail.SKU && (
          <p>
            <strong>SKU:</strong> {detail.SKU}
          </p>
        )}
        <p>
          <strong>Category:</strong> {detail.category}
        </p>
        <p
  className={
    detail.quantity > 0 ? "stock_available" : "stock_unavailable"
  }
>
  {detail.quantity > 0 ? (
    detail.selling_type === "both" ? "Available in Website & Outlet" :
    detail.selling_type === "online" ? "Available in Website only" :
    detail.selling_type === "physical" ? "Available in Outlet only" :
    "Available"
  ) : (
    "Out of stock"
  )}
</p>

        {detail.compare_price && (
          <p>
            <strong>Compare at:</strong> {detail.compare_price}৳
          </p>
        )}
      </div>
      <div className="product_add_count">
        <button onClick={increase}>+</button>
        <p className={direction}>{addProduct}</p>
        <button onClick={decrease}>-</button>
      </div>

      <div className="order_cart_btn">
        <Link className="cart_btn" onClick={handleAddToCart}>Add to cart</Link>
        <Link className="buy_btn" to={`/payment/${detail._id}`}>Buy now</Link>
      </div>
      <div className="product_notes">
        <p>
          <strong>Note:</strong> High quality lawn fabric, hand embroidery.
        </p>
      </div>

      <div className="product_tags">
        {["Women", "Lawn", "Embroidered", "3PC"].map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="product_rating">
        <span>⭐⭐⭐⭐☆</span>
        <span>(24 reviews)</span>
      </div>
    </div>
  );
};

export default DetailOfProduct;
