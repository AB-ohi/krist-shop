import { Link } from "react-router-dom";
import "./NavBer.css";
import { CiSearch, CiHeart,CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBer = () => {
    const {user, logOut} = useContext(AuthContext)

    const handelLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error =>console.log(error))
        
    }
  return (
    <nav className="nav">
      <img src="../../../public/img/logo.svg" alt="" />
      <div>
        <ul className="nav-List-Item">
          <li>
            <Link id="item-list" to="">
              Home
            </Link>
          </li>
          <li>
            <Link id="item-list" to="">
              Shop
            </Link>
          </li>
          <li>
            <Link id="item-list" to="">
              Our Story
            </Link>
          </li>
          <li>
            <Link id="item-list" to="">
              Blog
            </Link>
          </li>
          <li>
            <Link id="item-list" to="">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-item">
        <CiSearch />
        <CiHeart />
        <CiShoppingCart />
        {
            user?<><button onClick={handelLogOut} id="nev-btn">LogOut</button></>:<><button id="nev-btn"><Link to='/login'>Login</Link></button></>
        }
      </div>
    </nav>
  );
};

export default NavBer;
