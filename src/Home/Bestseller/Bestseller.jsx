import { useState } from "react";
import "./BestSeller.css";
import { useEffect } from "react";

const Bestseller = () => {
  const [menCollections, SetMenCollections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/men")
      .then((res) => res.json())
      .then((data) => SetMenCollections(data));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our Bestseller</h1>
      <div className="best-seller-card-body">
        {menCollections.map((menCollection) => (
          <div style={{ border: "1px solid red" }} key={menCollection._id}>
            <img
              style={{ width: "100%" }}
              src={menCollection.pictureURL}
              alt=""
            />
            <h1 style={{ margin: "0" }}>{menCollection.productName}</h1>
            <p style={{ margin: "0" }}>{menCollection.nickname}</p>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
