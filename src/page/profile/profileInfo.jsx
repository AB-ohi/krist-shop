import { Link, useLoaderData } from "react-router-dom";
import profileInfoBG from "../../../public/img/profileInfoBG.png";
import "./ProfileInfo.css";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdPersonPinCircle } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useAddress from "../../Hook/addressHook";
const ProfileInfo = () => {
  const user = useLoaderData();
  const { addressList } = useAddress();
  console.log(addressList);
  return (
    <div style={{ position: "relative", width: "80%", paddingLeft: "30px" }}>
      <img className="profileImg" src={profileInfoBG} alt="" />
      <div className="InfoBody">
        <p
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderBottom: "4px solid pink",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <IoPersonCircleSharp
            style={{
              fontSize: "50px",
              textAlign: "center",
              color: "pink",
              textAlignLast: "center",
            }}
          />
          <span>
            <span style={{ fontSize: "37px" }}>{user.profileIDName}</span>
          </span>
        </p>
        <p
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderBottom: "4px solid #17C1CB",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <FiPhone
            style={{ fontSize: "50px", textAlign: "center", color: "#17C1CB" }}
          />{" "}
          <span>
            <span style={{ fontSize: "37px" }}>{user.phoneNumber}</span>
          </span>
        </p>
        <p
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderBottom: "4px solid #F4A528",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <HiOutlineMail
            style={{ fontSize: "50px", textAlign: "center", color: "#F4A528" }}
          />{" "}
          <span>
            <span style={{ fontSize: "20px" }}>{user.email}</span>
          </span>
        </p>
        <p
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderBottom: "4px solid #333F61",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <MdPersonPinCircle
            style={{ fontSize: "50px", textAlign: "center", color: "#333F61",}}
          />
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <span style={{ fontSize: "30px" }}>Add your address</span>
          <Link style={{ color: "#333F61",fontSize:'25px'}} to="/profile/address">
            <FaEdit style={{ cursor: "pointer" }} />
          </Link>
          </div>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
