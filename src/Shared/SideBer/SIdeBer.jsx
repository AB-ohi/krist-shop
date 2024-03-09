import {  IoChevronUpSharp } from "react-icons/io5";
import './SideBer.css'
import { useState } from "react";
const SIdeBer = () => {
  const [showMenItem, setShowMenItem] = useState();
  const [showWomenItem, setShowWomenItem] = useState(true);
  const [showFootwearItem, setShowFootwearItem] = useState(true);
  const [showKidsItem, setShowKidsItem] = useState(true);
  const [showIndianItem, setShowIndianItem] = useState(true);
  const [showWesternItem, setShowWesternItem] = useState(true);
  return (
    <div
      style={{
        width: "20%",
        backgroundColor: "black",
        color: "white",
      }}
    > 
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Men <IoChevronUpSharp className={`${showMenItem ? 'close-menu':'open-menu'}`} onClick={() => setShowMenItem(!showMenItem)} />
        </h1>
        <div className={`${showMenItem ? 'hide-menu':'shoe-menu'}`}>
          <p>T-Shirt</p>
          <p>Casual Shirt</p>
          <p>Formal Shirts</p>
          <p>Jackets</p>
          <p>Blazers & Coats</p>
        </div>
      </div>
      
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Women
            <IoChevronUpSharp  className={`${showWomenItem ? 'close-menu':'open-menu'}`} onClick={() => setShowWomenItem(!showWomenItem)} />
          </h1>
          <div className={`${showWomenItem ? 'hide-menu':'shoe-menu'}`}>
          <p>Kurtas & Suits</p>
          <p>Sarees</p>
          <p>Ethnic Wear</p>
          <p>Lehenga Cholis</p>
          <p>Jackets</p>
          </div>
        </div>
      
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Footwear
            <IoChevronUpSharp className={`${showFootwearItem ? 'close-menu':'open-menu'}`} onClick={() => setShowFootwearItem(!showFootwearItem)} />
          </h1>
          <div className={`${showFootwearItem ? 'hide-menu':'shoe-menu'}`}>
          <p>Flats</p>
          <p>Casual Shoes</p>
          <p>Heels</p>
          <p>Boots</p>
          <p>Sports Shoes & Floaters</p>
          </div>
        </div>
      
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Kids
            <IoChevronUpSharp className={`${showKidsItem ? 'close-menu':'open-menu'}`} onClick={() => setShowKidsItem(!showKidsItem)} />
          </h1>
          <div className={`${showKidsItem ? 'hide-menu':'shoe-menu'}`}>
          <p>T-Shirt</p>
          <p>Shirts</p>
          <p>Jeans</p>
          <p>Trousers</p>
          <p>Party wear</p>
          </div>
        </div>
      
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Bangla & Festive Wear
            <IoChevronUpSharp className={`${showIndianItem ? 'close-menu':'open-menu'}`} onClick={() => setShowIndianItem(!showIndianItem)} />
          </h1>
          <div  className={`${showIndianItem ? 'hide-menu':'shoe-menu'}`}>
          <p>Kurta & Kurta Set</p>
          <p>Sherwanis</p>
          </div>
        </div>
     
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Western Wear
            <IoChevronUpSharp className={`${showWesternItem ? 'close-menu':'open-menu'}`} onClick={() => setShowWesternItem(!showWesternItem)} />
          </h1>
          <div className={`${showWesternItem ? 'hide-menu':'shoe-menu'}`}>
          <p>Dresses</p>
          <p>Jumpsuits</p>
          </div>
        </div>
    </div>
  );
};

export default SIdeBer;
