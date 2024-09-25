import { Outlet } from "react-router-dom";
import ProfileSideBer from "../Shared/ProfileSideBer/ProfileSideBer";
import "./profile.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaCamera } from "react-icons/fa";
import portalHook from "../page/Profile/portalHook";
// import profileBanner from '../../public/img/profileBanner.jpg'

const Profile = () => {
  const { user } = useContext(AuthContext);
  const {isPortalOn, setIsPortalOn} = portalHook()
  console.log(isPortalOn)
  return (
    <div>
      <div className="profileHeader">
        <div className="portal">
            <label htmlFor="img">select a picture</label>
            <input type="file" name="img" id="" />
        </div>
        <div className="profileBanner"></div>
        <div className="profileCommonInfo">
          <div style={{ position: "relative" }}>
            <img
              className="profilePicture"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "100%",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
              src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
              alt=""
            />
            <FaCamera
              onClick={()=>setIsPortalOn(!isPortalOn)}
              style={{
                position: "absolute",
                color: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                  bottom:'22px',
                  right:'31px',
                  fontSize:'23px'
              }}
            />
          </div>
          <h1 style={{ margin: "0" }}>{user.displayName}</h1>
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
