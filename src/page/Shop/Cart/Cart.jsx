import { useEffect, useState } from "react";

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
      <div style={{ display: "grid", gridTemplateColumns:' repeat(3, 1fr)'}}>
        {products.map((products) => (
          <div style={{border:'1px, solid, red'}} key={products._id}>
            <img style={{width:"100%"}} src={products.pictureURL} alt="" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Cart;
