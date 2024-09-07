import { Outlet } from "react-router-dom";
import ProfileSideBer from "../Shared/ProfileSideBer/ProfileSideBer";

const Profile = () => {
    return (
        <div>
            <div style={{display:'flex'}}>
            <img style={{width:'350px', borderRadius:'100%'}} src="https://i.pinimg.com/originals/79/81/06/798106a8e12c2a545aa89876da8179ae.png" alt="" />
            <div><p>Name</p>
            <p>Gmail</p>
            <p>Phone</p></div>
            </div>
            <div>
            <ProfileSideBer/>
            <Outlet/>
            </div>
        </div>
    );
};

export default Profile;