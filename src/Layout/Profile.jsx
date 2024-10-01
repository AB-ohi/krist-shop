import { Outlet } from "react-router-dom";
import ProfileSideBer from "../Shared/ProfileSideBer/ProfileSideBer";
import "./profile.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaCamera } from "react-icons/fa";
import portalHook from "../page/Profile/portalHook";
import profileLoader from '../../public/img/loader.gif'
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import useUserData from "../Hook/useUserData";
import emptyProfilePicture from "../../public/img/emptyProfilePicture.png"


const Image_Upload_Token = import.meta.env.VITE_Image_Upload_Token
const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const {isPortalOn, setIsPortalOn} = portalHook()
  const {register,handleSubmit,reset} = useForm()
  const {User} = useUserData()
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Upload_Token}`
  const addProfilePicture = (data) => {
    console.log(data)
    const formData = new FormData();
    formData.append('image', data.image[0]);
    fetch(img_hosting_url,{
      method:'post',
      body:formData
    })
    .then((res)=>res.json())
    .then((imgUpload)=>{
      console.log(imgUpload)
      if(imgUpload.success){
        const url = imgUpload.data.display_url;
        console.log(url)
        fetch(`http://localhost:5000/user/${user.displayName}`,{
          method:'PATCH',
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify({pictureUrl: url})
        })
        .then(data=>{
          console.log(data.url)
          if(data.url){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            setIsPortalOn(!isPortalOn)
          }
          reset()
        })
      }
    })
  }

  return (
    <div>
      <div className="profileHeader">
       <form onSubmit={handleSubmit(addProfilePicture)} className={`${!isPortalOn? "portal_main":"portal_main_off"}`}>
       <div className="portal">
            <label htmlFor="img">select a picture</label>
            <input type="file" {...register("image", { required: true })} name="image" id="" />
            <div style={{display:'flex', gap:'10px', padding:'20px 0 0 0', justifyContent:'end'}}>
              <input type="submit" value='save' style={{backgroundColor:'rgb(136, 86, 255)', color:'white', padding:'3px 11px', borderRadius:'8px'}}/>
              <p onClick={()=>setIsPortalOn(!isPortalOn)} style={{ padding:'3px 11px', cursor:'pointer'}}>Cancel</p>
            </div>
        </div>
       </form>
        <div className="profileBanner"></div>
        <div className="profileCommonInfo">
          <div style={{ position: "relative" }}>
            {
              user ? (<img
              className="profilePicture"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "100%",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
              src={user.photoUrl || (User && User.pictureUrl)}
              alt=""
            />):(
              <img
              className="profilePicture"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "100%",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
              src={emptyProfilePicture}
              alt=""
            />
            )
            }
            {
              !isPortalOn? <div>
              <img style={{
                  position: "absolute",
                  color: "white",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    bottom:'22px',
                    right:'17px',
                    width:'45px',
                    height:'45px',
                    borderRadius:'50%'
                }} src={profileLoader} alt="" />
              </div>:<FaCamera
              className={`${!isPortalOn? 'update_picture':''}`}
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
            }
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
