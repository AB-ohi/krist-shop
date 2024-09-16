import { Link } from 'react-router-dom';
import './ProfileSideBer.css'
import { CgProfile } from "react-icons/cg";
import { LiaAddressBookSolid } from "react-icons/lia";
import { MdOutlineBookmarkBorder } from "react-icons/md";
const ProfileSideBer = () => {
    return (

            <div className='MainProfileSideBer'>
            <div className='MainChild'>
            <button><CgProfile/><Link to='#'>Profile</Link></button>
            <button><LiaAddressBookSolid/><Link to='#'>Address book</Link></button>
            <button><MdOutlineBookmarkBorder/><Link to='#'>My orders</Link></button>
            </div>
        </div>

    );
};

export default ProfileSideBer;