import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const calculateDiscountPrice = (price) => {
  return price - (price - 0.3);
};
const SelleCard = ({
  pictureURL,
  productName,
  nickname,
  price,
  discount,
  discount_price,
}) => {
  return (
    <div className="product-cart">
      <div className="card_inside">
        <div style={{ position: "relative" }}>
          {
            discount == 0? (
              <div></div>
            ):
            (
              <p
            style={{
              position: "absolute",
              top: "67px",
              left: "-20px",
              backgroundColor: "red",
              color: "white",
              padding: "5px 10px",
              borderRadius: "8px 0 0 0",
              fontSize: "14px",
              zIndex: 10,
            }}
          >
            {discount}%
          </p>
            )
          }
          <img
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              display: "block",
              borderRadius: "10px",
            }}
            className="best_sell_product_img"
            src={pictureURL}
            alt=""
          />
        </div>
        <h1 style={{ margin: "0", fontSize: "20px" }}>{productName}</h1>
        <p style={{ margin: "0" }}>{nickname}</p>
        <div>
          <p>Discount price: {discount_price}</p>
          <p>
            Price: <span style={{ color: "rgb(196, 196, 196)" }}>{price}</span>
          </p>
        </div>
      </div>
      <div className="best_selling_details">
        <Link to="/">details</Link>
      </div>
    </div>
  );
};

export default SelleCard;
