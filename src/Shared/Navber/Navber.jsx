import { NavLink } from "react-router-dom";
import "./NavBer.css";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import ShopMenu from "./shopMenu/ShopMenu";

const NavBer = () => {
  const { user, logOut } = useContext(AuthContext);
  const [shopMenu, setShopMenu] = useState(true);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="nav">
        <a href="/"><img src="../../../public/img/logo.svg" alt="" /></a>
        <div>
          <ul className="nav-List-Item">
            <li>
              <NavLink id="item-list" to="" onClick={() => setShopMenu(true)}>
                Home
              </NavLink>
            </li>
            <li>
              {shopMenu ? (
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <NavLink
                  
                    style={{ display: "flex", alignItems: "center" }} 
                    
                    id="item-list"
                    to="/shop" onClick={() => setShopMenu(true)}
                  >
                    Shop
                  </NavLink>
                  <IoChevronDownSharp
                    onClick={() => setShopMenu(false)}
                    style={{ marginLeft: "5px" }}
                  />
                </div>
              ) : (
                <div  style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <NavLink
                  onClick={() => setShopMenu(true)} 
                    style={{ display: "flex", alignItems: "center" }}
                    id="item-list"
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
              <NavLink id="item-list" to="" onClick={() => setShopMenu(true)}>
              
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink id="item-list" to="" onClick={() => setShopMenu(true)}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink id="item-list" to="" onClick={() => setShopMenu(true)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-item">
          <CiSearch />
          <CiHeart />
          <CiShoppingCart />
          {user ? (
            <>
              <button onClick={handelLogOut} id="nev-btn">
                LogOut
              </button>
            </>
          ) : (
            <>
              <button id="nev-btn">
                <NavLink
                  style={{ color: "white", textDecoration: "none" }}
                  to="/login"
                >
                  Login
                </NavLink>
              </button>
            </>
          )}
        </div>
      </nav>
      {shopMenu ? (
        <div className="show-menu ofMenu">
          <ShopMenu />
        </div>
      ) : (
        <div className="show-menu onMenu">
          <ShopMenu />
        </div>
      )}
    </div>
  );
};

export default NavBer;
