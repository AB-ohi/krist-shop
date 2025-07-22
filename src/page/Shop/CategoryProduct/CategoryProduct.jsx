import { Link, useLoaderData, useParams } from "react-router-dom";
import "./CategoryProduct.css";
import { useState } from "react";

const CategoryProduct = () => {
  const { category } = useParams();
  const products = useLoaderData();
  const [loading, isLoading] = useState(false);

  const handelDetailBtn = () =>{
    isLoading(true)
    setTimeout(()=>{
        isLoading(false)
    }, 600)
  }

  return (
    <div  style={{ width: "80%", padding: "20px" }}>
        
   {
    loading? (
        <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh'
    }}>
      <img src="../../public/img/loading.gif" alt="Loading..." style={{ width: '80px' }} />
    </div>
    ):
    (
         <div>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          textTransform: "capitalize",
        }}
      >
        Category: {category}
      </h1>

      {
        products?.length === 0 ? (
            <div>
                <p>sfvnjdfnvs</p>
            </div>
        ):(
            <div
        style={{  
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          paddingRight: "10px",
        }}
      >
        {products?.map((product) => (
          <div className="shopDisplayProductCard card-animate" key={product._id}>
            <div className="shopDisplayProductImgWrapper">
              <img src={product.images?.[0]} alt={product.product_name} />
              <div className="imgOverlay">
                <button className="detailsButton"><Link  onClick={handelDetailBtn}  to={`/detail/${product._id}`}>Details</Link></button>
              </div>
            </div>

            <div style={{ margin: "10px 0 10px 10px" }}>
              <h2 style={{ fontSize: "15px", fontWeight: "600", color: "" }}>
                {product.product_name}
              </h2>

              {product?.discount > 0 ? (
                <div style={{ marginTop: "5px", fontSize: "14px", position:"relative" }}>
                  <p style={{ textDecoration: "line-through", color: "gray" }}>
                    Original Price: ৳{product.main_price}
                  </p>
                  <p style={{ color: "#007180", fontWeight: "bold" }}>
                    Discounted Price: ৳{product.discount_price}
                  </p>
                  <p className="discountInProduct">{product.discount}%</p>
                  
                </div>
              ) : (
                <p
                  style={{
                    marginTop: "5px",
                    color: "#007180",
                    fontWeight: "bold",
                  }}
                  >
                  Price: ৳{product.main_price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
        )
      }
    </div>
    )
   }
    </div>
  );
};

export default CategoryProduct;
