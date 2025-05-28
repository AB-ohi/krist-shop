import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const calculateDiscountPrice = (price) => {
  return price - (price - 0.3);
};
const SelleCard = ({ pictureURL, productName, nickname, price }) => {
  const originalPrice = price;
  // console.log(originalPrice)

  const discountPrice = parseInt(originalPrice - originalPrice * 0.3);

  console.log(discountPrice);

  return (
    <div className="product-cart">
      <div className="card_inside">
        <div style={{ position: "relative" }}>
          <p
            style={{
              zIndex: "10",
              position: "absolute",
              backgroundColor: "red",
              color: "white",
              padding: "5px 8px",
              margin: "0",
              left: "-20px",
              borderRadius: "11px 0 0 0 ",
            }}
          >
            30%
          </p>
          <img style={{ width: "100%", zIndex: "1" }} src={pictureURL} alt="" />
        </div>
        <h1 style={{ margin: "0", fontSize: "20px" }}>{productName}</h1>
        <p style={{ margin: "0" }}>{nickname}</p>
        <div>
          <p>Discount price: {discountPrice}</p>
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
