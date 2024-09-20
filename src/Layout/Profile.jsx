import { Outlet } from "react-router-dom";
import ProfileSideBer from "../Shared/ProfileSideBer/ProfileSideBer";
import "./profile.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import profileBanner from '../../public/img/profileBanner.jpg'

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
    <div>
     <div className="profileHeader">
     <div className="profileBanner"></div>
      <div className="profileCommonInfo">
        <img
        className="profilePicture"
          style={{ width: "250px", height: "250px", borderRadius: "100%", boxShadow:'rgb(38, 57, 77) 0px 20px 30px -10px'}}
          src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
          alt=""
        />
        <h1 style={{margin:'0'}}>{user.displayName}</h1>
      </div>
     </div>
      <div className="profileBody">
        <ProfileSideBer />
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
