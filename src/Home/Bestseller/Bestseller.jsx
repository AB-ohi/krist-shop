import { useState } from "react";
import "./BestSeller.css";
import { useEffect } from "react";
import SelleCard from "./SelleCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Bestseller = () => {
  const [menCollections, SetMenCollections] = useState([]);
  // console.log(menCollections.price)
  // const originalPrice = menCollections.price
  // console.log(originalPrice)
  // const discountPrice = originalPrice - (menCollections.price * 0.01)
  // console.log(discountPrice)

  useEffect(() => {
    fetch("http://localhost:5000/men")
      .then((res) => res.json())
      .then((data) => SetMenCollections(data));
  }, []);
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Our Bestseller</h1>
      <div className="best-seller-card-body">
        {menCollections.slice(2).map((menCollection, index) => (
           <motion.div
            className="best-seller-single-card"
            key={menCollection._id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 , type: "spring" }}
            viewport={{ once: true, amount: 0.3 }} 
            whileHover={{ scale: 1.05 }}
          >
            <SelleCard
              style={{ border: "1px solid red" }}
              className=""
              pictureURL={menCollection.pictureURL}
              productName={menCollection.productName}
              nickname={menCollection.nickname}
              price={menCollection.price}
            ></SelleCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
