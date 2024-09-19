import { Link, NavLink } from "react-router-dom";
import "./NavBer.css";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import { GiScrollUnfurled } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";
import ShopMenu from "./shopMenu/ShopMenu";
import ResNav from "./ResNav";
import profilePIC from "../../../public/img/profilePIC.jpg"

const NavBer = () => {
  const { user, logOut } = useContext(AuthContext);
  const [shopMenu, setShopMenu] = useState(true);
  const [tabletsNavItemShow, setTabletsNavItemShow] = useState(true);
  // console.log(user.photoURL);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="nav">
        <a href="/">
          <img src="../../../public/img/logo.svg" alt="" />
        </a>
        <div>
          <ul className="nav-List-Item ">
            <li>
              <NavLink id="item-list" to="" onClick={() => setShopMenu(true)}>
                Home
              </NavLink>
            </li>
            <li>
              {shopMenu ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <NavLink
                    style={{ display: "flex", alignItems: "center" }}
                    id="item-list"
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
                    justifyContent: "center",
                  }}
                >
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
          <div className="res-menu">
            {tabletsNavItemShow ? (
              <div onClick={() => setTabletsNavItemShow(!tabletsNavItemShow)}>
                <GiScrollUnfurled />
              </div>
            ) : (
              <div onClick={() => setTabletsNavItemShow(!tabletsNavItemShow)}>
                <GiTireIronCross />
              </div>
            )}
          </div>

          <CiSearch />
          <CiHeart />
          <CiShoppingCart />
          {user ? (
              user.photoURL ? (
                <Link to={`/profile/${user.displayName}`}>
                  <img className="profilePic" src={user.photoURL} alt="" />
                </Link>
              ) : (
                <Link to={`/profile/${user.displayName}`}>
                  <img className="profilePic" src={profilePIC} alt="" />
                </Link>
              )
            ) : (
              <div></div>
            )}
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
      {/* res-nav item */}
      <div className={`${tabletsNavItemShow ? "PRasNavClose" : "PRasNavOpen"}`}>
        <ResNav />
      </div>
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
