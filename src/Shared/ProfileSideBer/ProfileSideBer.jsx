import { Link } from 'react-router-dom';
import './ProfileSideBer.css'
import { CgProfile } from "react-icons/cg";
import { LiaAddressBookSolid } from "react-icons/lia";
import { MdOutlineBookmarkBorder } from "react-icons/md";
const ProfileSideBer = () => {
    return (

            <div className='MainProfileSideBer'>
            <div className='MainChild'>
            <button><CgProfile/><Link to='/profile'>Profile</Link></button>
            <button><LiaAddressBookSolid/><Link to='/profile/address'>Address book</Link></button>
            <button><MdOutlineBookmarkBorder/><Link to='/profile/order'>My orders</Link></button>
            </div>
        </div>

    );
};

export default ProfileSideBer;