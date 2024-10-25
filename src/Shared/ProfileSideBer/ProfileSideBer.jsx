import { Link } from "react-router-dom";
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
        <button>
          <Link to={`/profile/${user.displayName}`}>
            <CgProfile />
            Profile
          </Link>
        </button>
        <button>
          <Link to="/profile/address">
            <LiaAddressBookSolid />
            Address book
          </Link>
        </button>
        <button>
          <Link to="/profile/order">
            <MdOutlineBookmarkBorder />
            My orders
          </Link>
        </button>

        <button onClick={handelLogOut}>
         <Link> <RiLogoutBoxLine /> LogOut</Link>
        </button>
      </div>
    </div>
  );
};

export default ProfileSideBer;
