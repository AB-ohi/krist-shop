import { Link } from "react-router-dom";

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
          {discount == 0 ? (
            <div></div>
          ) : (
            <p
              style={{
                position: "absolute",
                top: "94px",
              left: "-20px",
                backgroundColor: "#007BFF",
                color: "white",
                padding: "5px 12px",
                borderRadius: "0 0 8px 0",
                fontSize: "13px",
                fontWeight: "bold",
                zIndex: 10,
                transform: "translateY(-100%)", // যেন উপর থেকে নেমে আসছে মনে হয়
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)", // নিচে ছায়া
              }}
            >
              {discount}%
            </p>
          )}
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
          {discount == 0 ? (
            <p>
              Price: <span>{price}</span>
            </p>
          ) : (
            <p>
              Price:{" "}
              <span
                style={{
                  color: "rgb(196, 196, 196)",
                  textDecoration: "line-through",
                }}
              >
                {price}
              </span>
            </p>
          )}
          {discount === 0 || discount === "0" ? (
            <div>
              <p>
                Discount price:
                <span style={{ color: "red" }}> No Discount</span>
              </p>
            </div>
          ) : (
            <p>Discount price: {discount_price}</p>
          )}
        </div>
      </div>
      <div className="best_selling_details">
        <Link to="/">details</Link>
      </div>
    </div>
  );
};

export default SelleCard;
