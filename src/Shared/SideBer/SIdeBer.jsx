import { IoChevronUpSharp } from "react-icons/io5";
import "./SideBer.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const SIdeBer = () => {
  const [showMenItem, setShowMenItem] = useState(true);
  const [showWomenItem, setShowWomenItem] = useState(true);
  const [showFootwearItem, setShowFootwearItem] = useState(true);
  const [showKidsItem, setShowKidsItem] = useState(true);
  const [showIndianItem, setShowIndianItem] = useState(true);
  const [showWesternItem, setShowWesternItem] = useState(true);
  return (
    <div
      className="sideBer-main"
      style={{
        height: "100vh",
        backgroundColor:'#17263C',
        color: "white",
        paddingTop: "30px",
        paddingBottom: "30px",
        position: "static",
        top: "10px",
        overflow: "auto",
      }}
    >
      <div className="side-list">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-sideBer-link" : "sideBer-Link"
          }
          to="/shop/man"
        >
          men
          <IoChevronUpSharp
            className={`${showMenItem ? "close-menu" : "open-menu"}`}
            onClick={() => setShowMenItem(!showMenItem)}
          />
        </NavLink>
        <div className={`${showMenItem ? "hide-menu" : "shoe-menu"}`}>
          <p>T-Shirt</p>
          <p>Casual Shirt</p>
          <p>Formal Shirts</p>
          <p>Jackets</p>
          <p>Blazers & Coats</p>
        </div>
      </div>

      <div className="side-list">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-sideBer-link" : "sideBer-Link"
          }
          to="/shop/women"
        >
          Women
          <IoChevronUpSharp
            className={`${showWomenItem ? "close-menu" : "open-menu"}`}
            onClick={() => setShowWomenItem(!showWomenItem)}
          />
        </NavLink>
        <div className={`${showWomenItem ? "hide-menu" : "shoe-menu"}`}>
          <p>Kurtas & Suits</p>
          <p>Sarees</p>
          <p>Ethnic Wear</p>
          <p>Lehenga Cholis</p>
          <p>Jackets</p>
        </div>
      </div>

      <div className="side-list">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-sideBer-link" : "sideBer-Link"
          }
          to="/shop/footwear"
        >
          Footwear
          <IoChevronUpSharp
            className={`${showFootwearItem ? "close-menu" : "open-menu"}`}
            onClick={() => setShowFootwearItem(!showFootwearItem)}
          />
        </NavLink>
        <div className={`${showFootwearItem ? "hide-menu" : "shoe-menu"}`}>
          <p>Flats</p>
          <p>Casual Shoes</p>
          <p>Heels</p>
          <p>Boots</p>
          <p>Sports Shoes & Floaters</p>
        </div>
      </div>

      <div className="side-list">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-sideBer-link" : "sideBer-Link"
          }
          to="/shop/kids"
        >
          Kids
          <IoChevronUpSharp
            className={`${showKidsItem ? "close-menu" : "open-menu"}`}
            onClick={() => setShowKidsItem(!showKidsItem)}
          />
        </NavLink>
        <div className={`${showKidsItem ? "hide-menu" : "shoe-menu"}`}>
          <p>T-Shirt</p>
          <p>Shirts</p>
          <p>Jeans</p>
          <p>Trousers</p>
          <p>Party wear</p>
        </div>
      </div>

      <div className="side-list">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-sideBer-link" : "sideBer-Link"
          }
          to="/shop/bangla"
        >
          B&F Wear
          <IoChevronUpSharp
            className={`${showIndianItem ? "close-menu" : "open-menu"}`}
            onClick={() => setShowIndianItem(!showIndianItem)}
          />
        </NavLink>
        <div className={`${showIndianItem ? "hide-menu" : "shoe-menu"}`}>
          <p>Kurta & Kurta Set</p>
          <p>Sherwanis</p>
        </div>
      </div>

      <div className="side-list">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-sideBer-link" : "sideBer-Link"
          }
          to="/shop/western"
        >
          Western Wear
          <IoChevronUpSharp
            className={`${showWesternItem ? "close-menu" : "open-menu"}`}
            onClick={() => setShowWesternItem(!showWesternItem)}
          />
        </NavLink>
        <div className={`${showWesternItem ? "hide-menu" : "shoe-menu"}`}>
          <p>Dresses</p>
          <p>Jumpsuits</p>
        </div>
      </div>
    </div>
  );
};

export default SIdeBer;
