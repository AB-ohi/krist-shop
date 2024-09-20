import { useLoaderData } from "react-router-dom";
import profileInfoBG from "../../../public/img/profileInfoBG.png"
import './ProfileInfo.css'

const ProfileInfo = () => {
    const user = useLoaderData()
    // console.log(user)
    return (
        <div style={{position:'relative', width:'100%'}}>
            <img className="profileImg" src={profileInfoBG} alt="" />
            <p>Name: {user.displayName}</p>
            <p>Phone:</p>
            <p>E-mail: {user.email}</p>
            <p>Address:</p>
        </div>
    );
};

export default ProfileInfo;