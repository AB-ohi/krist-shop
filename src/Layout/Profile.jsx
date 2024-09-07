import { Outlet } from "react-router-dom";
import ProfileSideBer from "../Shared/ProfileSideBer/ProfileSideBer";

const Profile = () => {
    return (
        <div>
            <ProfileSideBer/>
            <Outlet/>
        </div>
    );
};

export default Profile;