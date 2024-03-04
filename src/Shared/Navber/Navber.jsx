import { Link } from "react-router-dom";
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
        <img src="../../../public/img/logo.svg" alt="" />
        <div>
          <ul className="nav-List-Item">
            <li>
              <Link id="item-list" to="" onClick={() => setShopMenu(true)}>
                Home
              </Link>
            </li>
            <li>
              {shopMenu ? (
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <Link
                  
                    style={{ display: "flex", alignItems: "center" }} 
                    
                    id="item-list"
                    to="/shop" onClick={() => setShopMenu(true)}
                  >
                    Shop
                  </Link>
                  <IoChevronDownSharp
                    onClick={() => setShopMenu(false)}
                    style={{ marginLeft: "5px" }}
                  />
                </div>
              ) : (
                <div  style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <Link
                  onClick={() => setShopMenu(true)} 
                    style={{ display: "flex", alignItems: "center" }}
                    id="item-list"
                    to="/shop"
                  >
                    Shop
                  </Link>
                  <IoChevronUpSharp
                    onClick={() => setShopMenu(true)}
                    style={{ marginLeft: "5px" }}
                  />
                </div>
              )}
            </li>
            <li>
              <Link id="item-list" to="" onClick={() => setShopMenu(true)}>
              
                Our Story
              </Link>
            </li>
            <li>
              <Link id="item-list" to="" onClick={() => setShopMenu(true)}>
                Blog
              </Link>
            </li>
            <li>
              <Link id="item-list" to="" onClick={() => setShopMenu(true)}>
                Contact Us
              </Link>
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
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/login"
                >
                  Login
                </Link>
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
