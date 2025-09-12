import { Link } from "react-router-dom";
import "./DetailOfProduct.css";
import { useState } from "react";

const DetailOfProduct = ({ detail }) => {
  const [addProduct, setAddProduct] = useState(1);
  return (
    <div className="detailAria">
      <p
        style={{
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        {detail.product_name}
      </p>
      <p style={{ fontSize: "15px" }}>{detail.product_detail}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        {detail?.discount > 0 ? (
          <div>
            <div className="Discount_price_all_detail">
              <p>
               <span
                  style={{
                    textDecoration: "line-through",
                    color: "rgba(171, 171, 171, 1)",
                  }}
                >
                  {detail.main_price}৳
                </span>
                <span
                  style={{ fontWeight: "bolder", color: "rgb(106, 66, 199)" ,fontSize:'20px', marginLeft:'10px'}}
                >
                  {detail.discount_price}৳{" "}
                </span>
              </p>
             
            </div>
            <p>
              discount:{" "}
              <span style={{ color: "rgba(2, 250, 73, 1)", marginTop: "10px" }}>
                {detail.discount}%
              </span>
            </p>
          </div>
        ) : (
          <div>Price: {detail.main_price}৳</div>
        )}
      </div>
      <div className="product_add_count">
        <button onClick={()=>setAddProduct(addProduct + 1)}>+</button>
        <p>{addProduct}</p>
        <button onClick={() => setAddProduct(Math.max(1, addProduct - 1))}>-</button>
      </div>
      <div className="order_cart_btn">
        <Link className="cart_btn">Add to cart</Link>
        <Link>Bye naw</Link>

      </div>
    </div>
  );
};
export default DetailOfProduct;
