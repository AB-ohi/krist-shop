import { useEffect, useState } from "react";
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {
  const [products, setProduct] = useState([]);

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
            <div style={{boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', padding:'20px', borderRadius:'11px'}} key={products._id}>
            <div className="cardBody">
            <img style={{width:"100%"}} className="cartImg" src={products.pictureURL} alt="" />
            <div>
              <p></p>
            </div>
            </div>
            <div style={{display:'flex', alignItems:'center' ,justifyContent:'space-between'}}>
            <div className="productCart">
              <p style={{fontWeight:'bold'}}>{products.productName}</p>
              <p>{products.nickname}</p>
              <p>${discountPRice}</p>
            </div>
            <div>
              <p style={{padding:'10px 15px', border:'solid 1px #1C0000', borderRadius:'8px'}}><Link to={`/detail/${products._id}`}> Details & Buy</Link></p>
            </div>
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