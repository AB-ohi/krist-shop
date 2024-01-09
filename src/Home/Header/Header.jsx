import './Header.css'
const Header = () => {
    return (
        <div className="home-page-header">
            <div>
                <p style={{fontSize:'35px', margin:'0 0 10px 0'}}>Classic Exclusive</p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 style={{fontSize:'40px', fontWeight:'800', fontFamily:" 'Jost', sans-serif", marginTop:'0'}}>Woman's Collection</h1>
                <button className='header-Btn'>Show More</button>
            </div>
           
                <img className='banner-pic' src="../../../public/img/homeBanner.png" alt="" />
           
        </div>
    );
};

export default Header;