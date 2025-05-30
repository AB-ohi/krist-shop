import { useState } from "react";
import "./BestSeller.css";
import { useEffect } from "react";
import SelleCard from "./SelleCard";
import { Link } from "react-router-dom";

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
        {menCollections.slice(2).map((menCollection) => (
          <div className="best-seller-single-card" key={menCollection._id}>
              <SelleCard
                style={{ border: "1px solid red" }}
                className=""
                pictureURL={menCollection.pictureURL}
                productName={menCollection.productName}
                nickname={menCollection.nickname}
                price={menCollection.price}
              ></SelleCard>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
