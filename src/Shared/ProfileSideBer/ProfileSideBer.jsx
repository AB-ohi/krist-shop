import { Link } from 'react-router-dom';
import './ProfileSideBer.css'
const ProfileSideBer = () => {
    return (

            <div className='MainProfileSideBer'>
            <button><Link to='#'>Profile</Link></button>
            <button><Link to='#'>Address book</Link></button>
            <button><Link to='#'>My orders</Link></button>
        </div>

    );
};

export default ProfileSideBer;