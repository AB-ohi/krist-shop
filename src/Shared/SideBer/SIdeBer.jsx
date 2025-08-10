import { useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./SideBer.css";
import { useEvent } from "../../Context/EventContext";

const SideBer = () => {
  const { setShowEvent } = useEvent();
  const [openMenu, setOpenMenu] = useState(null);
  const categories = [
    {
      name: "Men",
      path: "/shop/man",
      items: [
        "T-Shirt",
        "Casual Shirt",
        "Formal Shirts",
        "Jackets",
        "Blazers & Coats",
      ],
    },
    {
      name: "Women",
      path: "/shop/women",
      items: [
        "Kurtas & Suits",
        "Sarees",
        "Ethnic Wear",
        "Lehenga Cholis",
        "Jackets",
      ],
    },
    {
      name: "Footwear",
      path: "/shop/foot",
      items: [
        "Flats",
        "Casual Shoes",
        "Heels",
        "Boots",
        "Sports Shoes & Floaters",
      ],
    },
    {
      name: "Kids",
      path: "/shop/kids",
      items: ["T-Shirt", "Shirts", "Jeans", "Trousers", "Party wear"],
    },
    {
      name: "B&F Wear",
      path: "/shop/bangla",
      items: ["Kurta & Kurta Set", "Sherwanis"],
    },
    {
      name: "Western Wear",
      path: "/shop/western",
      items: ["Dresses", "Jumpsuits"],
    },
  ];

  return (
    <div className="sideBerMain">
      {categories.map((cat, index) => (
        <div key={index}>
           <NavLink
            className={({ isActive }) =>
              isActive ? "active-sideBer-link" : "sideBer-Link"
            }
            to={cat.path}
            onClick={() =>{ setOpenMenu(openMenu === index ? null : index);
               setShowEvent(false);
            }} 
          >
            {cat.name}
            <IoChevronUpSharp
              className={`${openMenu === index ? "open-menu" : "close-menu"}`}
            />
          </NavLink>
          <div className={`${openMenu === index ? "show-menu" : "hide-menu"}`}>
            {cat.items.map((item, i) => (
              <p className="mainItemMenu" key={i}>{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBer;
