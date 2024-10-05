import { Link } from 'react-router-dom';
import './ProfileSideBer.css'
import { CgProfile } from "react-icons/cg";
import { LiaAddressBookSolid } from "react-icons/lia";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const ProfileSideBer = () => {
    const {user} = useContext(AuthContext)
    return (

            <div className='MainProfileSideBer'>
            <div className='MainChild'>
            <button><Link to={`/profile/${user.displayName}`}><CgProfile/>Profile</Link></button>
            <button><Link to='/profile/address'><LiaAddressBookSolid/>Address book</Link></button>
            <button><Link to='/profile/order'><MdOutlineBookmarkBorder/>My orders</Link></button>
            </div>
        </div>

    );
};

export default ProfileSideBer;