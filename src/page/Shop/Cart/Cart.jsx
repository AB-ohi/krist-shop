import { useEffect, useState } from "react";
import './Cart.css'

const Cart = () => {
  const [products, setProduct] = useState([]);
  console.log

  useEffect(() => {
    fetch("http://localhost:5000/men")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div style={{width:'80%'}}>
      <p>Showing 1-16 of 71 results</p>
      <div style={{ height:'100vh', overflowX:'auto'}}>
      {/* cart section */}
      <div style={{ display: "grid", gridTemplateColumns:' repeat(3, 1fr)', gap:'10px', margin:'20px'
      }}>
        {products.map((products) => {
          const discountPRice =  parseInt(products.price - (products.price * 0.3))
          return(
            <div style={{border:'1px, solid, red'}} key={products._id}>
            <img style={{width:"100%"}} src={products.pictureURL} alt="" />
            <div className="productCart">
              <p style={{fontWeight:'bold'}}>{products.productName}</p>
              <p>{products.nickname}</p>
              <p>${discountPRice}</p>
            </div>
          </div>
          )
})}
      </div>
    </div>
    </div>
  );
};

export default Cart;