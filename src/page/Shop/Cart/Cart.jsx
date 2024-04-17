import { useEffect, useState } from "react";

const Cart = () => {
    const [products, setProduct] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/men')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <p>Showing 1-16 of 71 results</p>
            {/* cart section */}
            {
                products.map((products) => (
                    <div key={products._id}>

                    </div>
                ))
            }


            
        </div>
    );
};

export default Cart;