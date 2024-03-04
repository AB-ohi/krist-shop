import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

import { useState } from "react";
const SIdeBer = () => {
  const [showMenItem, setShowMenItem] = useState(true);
  const [showWomenItem, setShowWomenItem] = useState(true);
  // const [showFootwearItem, setShowFootwearItem]= useState(true);
  // const [showKidsItem, setShowKidsItem]= useState(true);
  // const [showIndianItem, setShowIndianItem]= useState(true);
  // const [showWesternItem, setShowWesternItem]= useState(true);
  return (
    <div
      style={{
        width: "20%",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {showMenItem ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Men <IoChevronDownSharp onClick={() => setShowMenItem(false)} />
        </h1>
      ) : (
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Men <IoChevronUpSharp onClick={() => setShowMenItem(true)} />
          </h1>
          <p>T-Shirt</p>
          <p>Casual Shirt</p>
          <p>Formal Shirts</p>
          <p>Jackets</p>
          <p>Blazers & Coats</p>
        </div>
      )}
      {showWomenItem ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Women
          <IoChevronDownSharp onClick={() => setShowWomenItem(false)} />
        </h1>
      ) : (
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Women
            <IoChevronUpSharp onClick={() => setShowWomenItem(true)} />
          </h1>
          <p>Kurtas & Suits</p>
          <p>Sarees</p>
          <p>Ethnic Wear</p>
          <p>Lehenga Cholis</p>
          <p>Jackets</p>
        </div>
      )}
      <h1>Footwear</h1>
      <h1>Kids</h1>
      <h1>Indian & Festive Wear</h1>
      <h1>Western Wear</h1>
    </div>
  );
};

export default SIdeBer;
