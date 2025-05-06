import {  NavLink } from "react-router-dom";
import "./ProfileSideBer.css";
import { CgProfile } from "react-icons/cg";
import { LiaAddressBookSolid } from "react-icons/lia";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { RiLogoutBoxLine } from "react-icons/ri";
import userRoleHook from "../../Hook/userRoleHook";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { TbMessages } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";

const ProfileSideBer = () => {
  const userData = userRoleHook()
  console.log(userData)
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut().then(() => {});
  };
  return (
    <div className="MainProfileSideBer">
      {
        userData?.role == 'admin'?(
          <div className="MainChild">
          <NavLink className={({isActive})=>(isActive? "profile_side_ber_active":'profile_side_ber')} to={`/profile/dashboard/${user.displayName}`}>
          <LuLayoutDashboard />
            Dashboard
          </NavLink>
          <NavLink className={({isActive})=>(isActive? "profile_side_ber_active":'profile_side_ber')} to="/profile/address">
          <MdOutlineProductionQuantityLimits/>
          Manage Products
          </NavLink>
          <NavLink className={({isActive})=>(isActive? "profile_side_ber_active":'profile_side_ber')} to="/profile/order">
            <MdOutlineCategory />
            Manage Categories
          </NavLink>  
          <NavLink className={({isActive})=>(isActive? "profile_side_ber_active":'profile_side_ber')} to="/profile/order">
            <TbTruckDelivery />
            Manage Orders
          </NavLink>  
          <NavLink className={({isActive})=>(isActive? "profile_side_ber_active":'profile_side_ber')} to="/profile/manageUser">
            <FaRegUserCircle />
            Manage Users
          </NavLink>   
          <NavLink className={({isActive})=>(isActive? "profile_side_ber_active":'profile_side_ber')} to="/profile/order">
            <TbMessages />
            Customer Messages
          </NavLink> 
        <button className="profile_side_ber" onClick={handelLogOut}>
         <NavLink style={{textDecoration:'none'}}> <RiLogoutBoxLine /> LogOut</NavLink>
        </button>
      </div>
        ):userData?.role == 'customer'?(
          <div className="MainChild">
          <NavLink className={({isActive})=>(isActive? "profile_side_ber_active":'profile_side_ber')} to={`/profile/${user.displayName}`}>
            <CgProfile />
            Profile
          </NavLink>
          <NavLink className={({isActive})=>(isActive? "profile_side_ber_active":'profile_side_ber')} to="/profile/address">
            <LiaAddressBookSolid />
            Address book
          </NavLink>
          <NavLink className={({isActive})=>(isActive? "profile_side_ber_active":'profile_side_ber')} to="/profile/order">
            <MdOutlineBookmarkBorder />
            My orders
          </NavLink>  

        <button className="profile_side_ber" onClick={handelLogOut}>
         <NavLink style={{textDecoration:'none'}}> <RiLogoutBoxLine /> LogOut</NavLink>
        </button>
      </div>
        ):(
          <div>

          </div>
        )
      }
    </div>
  );
};

export default ProfileSideBer;
