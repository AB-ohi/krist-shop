import { useContext, useEffect, useState } from "react";

const allProductHook = () => {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/AllProduct")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAllProduct(data);
        } else {
          console.log("data cant recognize", error);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  return allProduct;
};

export default allProductHook;
