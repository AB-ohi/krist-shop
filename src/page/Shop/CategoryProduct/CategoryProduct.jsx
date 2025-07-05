import { useLoaderData, useParams } from "react-router-dom";
import "./CategoryProduct.css";

const CategoryProduct = () => {
  const { category } = useParams();
  const products = useLoaderData();

  return (
    <div style={{ width: "80%", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", textTransform: "capitalize" }}>
        Category: {category}
      </h1>

      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          paddingRight: "10px",
        }}
      >
        {products?.map((product) => (
          <div className="shopDisplayProductCard" key={product._id}>
            <div className="shopDisplayProductImg">
              <img
                src={product.images?.[0]}
                alt={product.product_name}
                style={{ width: "100%", borderRadius: "5px", objectFit: "cover" }}
              />
            </div>

            <div style={{ marginTop: "10px" }}>
              <h2 style={{ fontSize: "15px", fontWeight: "600" }}>
                {product.product_name}
              </h2>

              {product?.discount > 0 ? (
                <div style={{ marginTop: "5px", fontSize: "14px" }}>
                  <p style={{ textDecoration: "line-through", color: "gray" }}>
                    Original Price: ৳{product.main_price}
                  </p>
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Discounted Price: ৳{product.discount_price}
                  </p>
                  <p style={{ color: "red" }}>Discount: {product.discount}%</p>
                </div>
              ) : (
                <p style={{ marginTop: "5px", fontWeight: "bold", color: "green" }}>
                  ৳{product.main_price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
