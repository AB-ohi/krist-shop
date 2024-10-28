import {  NavLink } from "react-router-dom";
import "./ProfileSideBer.css";
import { CgProfile } from "react-icons/cg";
import { LiaAddressBookSolid } from "react-icons/lia";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { RiLogoutBoxLine } from "react-icons/ri";
const ProfileSideBer = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut().then(() => {});
  };
  return (
    <div className="MainProfileSideBer">
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
         <NavLink> <RiLogoutBoxLine /> LogOut</NavLink>
        </button>
      </div>
    </div>
  );
};

export default ProfileSideBer;
