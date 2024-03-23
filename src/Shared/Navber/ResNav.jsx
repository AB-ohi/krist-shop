import { NavLink } from "react-router-dom";
import "./NavBer.css";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { useState } from "react";
const ResNav = () => {
  const [shopMenu, setShopMenu] = useState(true);
  //   const [tabletsNavItemShow, setTabletsNavItemShow] = useState(true);
  return (
    <div className="ResNav">
      <ul className="ResNav-ul">
        <li>
          <NavLink to="/" onClick={() => setShopMenu(true)}>
            Home
          </NavLink>
        </li>
        <li>
          {shopMenu ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <NavLink
                style={{ display: "flex", alignItems: "center" }}
            
                to="/shop"
                onClick={() => setShopMenu(true)}
              >
                Shop
              </NavLink>
              <IoChevronDownSharp
                onClick={() => setShopMenu(false)}
                style={{ marginLeft: "5px" }}
              />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <NavLink
                onClick={() => setShopMenu(true)}
                style={{ display: "flex", alignItems: "center" }}
            
                to="/shop"
              >
                Shop
              </NavLink>
              <IoChevronUpSharp
                onClick={() => setShopMenu(true)}
                style={{ marginLeft: "5px" }}
              />
            </div>
          )}
        </li>
        <li>
          <NavLink to="" onClick={() => setShopMenu(true)}>
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink to="" onClick={() => setShopMenu(true)}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="" onClick={() => setShopMenu(true)}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ResNav;
