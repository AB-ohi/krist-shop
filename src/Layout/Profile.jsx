import { Outlet } from "react-router-dom";
import ProfileSideBer from "../Shared/ProfileSideBer/ProfileSideBer";
import "./profile.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaCamera } from "react-icons/fa";
import profileLoader from '../../public/img/loader.gif'
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import useUserData from "../Hook/useUserData";
import emptyProfilePicture from "../../public/img/emptyProfilePicture.png"
import portalHook from "../Hook/portalHook";


const Image_Upload_Token = import.meta.env.VITE_Image_Upload_Token
const Profile = () => {
  const { user } = useContext(AuthContext);
  const {isPortalOn, setIsPortalOn} = portalHook()
  const {register,handleSubmit,reset} = useForm()
  const {User} = useUserData([])
  console.log(User)
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
            reset()
            window.location.reload()
          }
        })
      }
    })
  }

  return (
    <div>
      <div className="profileHeader">
       <form onSubmit={handleSubmit(addProfilePicture)} className={`${!isPortalOn? "portal_main":"portal_main_off"}`}>
       <div className="portal">
            <label htmlFor="img" style={{fontSize:'25px'}}>select a picture</label>
            <input className="profile_Picture_select" type="file" accept="image/*"{...register("image", { required: true })} name="image" id="" />
            <div style={{display:'flex', gap:'10px', padding:'20px 0 0 0', justifyContent:'end'}}>
              <input type="submit" value='save' style={{backgroundColor:'rgb(136, 86, 255)', color:'white', padding:'5px 17px', borderRadius:'4px', fontSize:'18px'}}/>
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
              src={user.photoUrl || (User && User.pictureUrl) || emptyProfilePicture}
              alt=""
            />):(
              <img
              className="profilePicture"
              style={{
                height: "250px",
                width: "250px",
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
          <h1 style={{ margin: "0" }}>{User? User.profileIDName:'' }</h1>
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
