import "./DetailOfProduct.css";

const DetailOfProduct = ({ detail }) => {
  console.log(detail?.main_price);
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
      {
        detail.qua
      }
    </div>
  );
};
export default DetailOfProduct;
