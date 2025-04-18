import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="home-page-header">
            <div className='page-header-chile'>
                <p style={{margin:'0 0 10px 0'}}>Classic Exclusive</p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 style={{fontSize:'40px', fontWeight:'800', fontFamily:" 'Jost', sans-serif", marginTop:'0'}}>Woman's Collection</h1>
                <button className='header-Btn'><Link style={{textDecoration:'none',color:'white'}} to='/shop'>Show More</Link></button>
            </div>
           
                <img className='banner-pic' src="../../../public/img/homeBanner.png" alt="" />
           
        </div>
    );
};

export default Header;