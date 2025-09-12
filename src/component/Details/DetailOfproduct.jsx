import { Link } from "react-router-dom";
import "./DetailOfProduct.css";
import { useState } from "react";

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

  return (
    <div className="detailAria">
      {/* Product Name & Detail */}
      <p className="product_name">{detail.product_name}</p>
      <p className="product_detail">{detail.product_detail}</p>

      {/* Price & Discount */}
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

      {/* Quantity Selector */}
      <div className="product_add_count">
        <button onClick={increase}>+</button>
        <p className={direction}>{addProduct}</p>
        <button onClick={decrease}>-</button>
      </div>

      {/* Buttons */}
      <div className="order_cart_btn">
        <Link className="cart_btn">Add to cart</Link>
        <Link className="buy_btn">Buy now</Link>
      </div>

      {/* Optional Notes */}
      <div className="product_notes">
        <p>
          <strong>Note:</strong> High quality lawn fabric, hand embroidery.
        </p>
      </div>

      {/* Optional Tags */}
      <div className="product_tags">
        {["Women", "Lawn", "Embroidered", "3PC"].map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Optional Rating */}
      <div className="product_rating">
        <span>⭐⭐⭐⭐☆</span>
        <span>(24 reviews)</span>
      </div>
    </div>
  );
};

export default DetailOfProduct;
