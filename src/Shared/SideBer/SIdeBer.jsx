import {  IoChevronUpSharp } from "react-icons/io5";
import './SideBer.css'
import {  useState } from "react";
import { Link } from "react-router-dom";
const SIdeBer = () => {
  
  const [showMenItem, setShowMenItem] = useState(true);
  const [showWomenItem, setShowWomenItem] = useState(true);
  const [showFootwearItem, setShowFootwearItem] = useState(true);
  const [showKidsItem, setShowKidsItem] = useState(true);
  const [showIndianItem, setShowIndianItem] = useState(true);
  const [showWesternItem, setShowWesternItem] = useState(true);
  return (
    <div
    className="sideBer-main"
      style={{
        cursor:"pointer",
        height:'100vh',
        backgroundImage:'url(../../../public/img/sidebarBG.jpg)',
        color: "white",
        paddingTop:'30px',
        paddingBottom:'30px',
            position:'static',
            top:"10px",
            overflow:'auto'
      }}
    > 
      <div className='side-list'>
        <Link to='/shop/man'
          style={{
            cursor:"pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => setShowMenItem(!showMenItem)}
        >
          Men <IoChevronUpSharp className={`${showMenItem ? 'close-menu':'open-menu'}`}  />
        </Link>
        <div className={`${showMenItem ? 'hide-menu':'shoe-menu'}`}>
          <p>T-Shirt</p>
          <p>Casual Shirt</p>
          <p>Formal Shirts</p>
          <p>Jackets</p>
          <p>Blazers & Coats</p>
        </div>
      </div>
      
        <div className='side-list'>
          <h1
            style={{
              cursor:"pointer",
              
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ZIndex: "1",

              
            }}
             onClick={() => setShowWomenItem(!showWomenItem)} 
          >
            Women
            <IoChevronUpSharp  className={`${showWomenItem ? 'close-menu':'open-menu'}`}/>
          </h1>
          <div className={`${showWomenItem ? 'hide-menu':'shoe-menu'}`}>
          <p>Kurtas & Suits</p>
          <p>Sarees</p>
          <p>Ethnic Wear</p>
          <p>Lehenga Cholis</p>
          <p>Jackets</p>
          </div>
        </div>
      
        <div className='side-list'>
          <h1
            style={{
              cursor:"pointer",
              
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ZIndex: "10"
              
            }}
             onClick={() => setShowFootwearItem(!showFootwearItem)} 
          >
            Footwear
            <IoChevronUpSharp className={`${showFootwearItem ? 'close-menu':'open-menu'}`}/>
          </h1>
          <div className={`${showFootwearItem ? 'hide-menu':'shoe-menu'}`}>
          <p>Flats</p>
          <p>Casual Shoes</p>
          <p>Heels</p>
          <p>Boots</p>
          <p>Sports Shoes & Floaters</p>
          </div>
        </div>
      
        <div className='side-list'>
          <h1
            style={{
              cursor:"pointer",
              
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ZIndex: "10"
              
            }}
            onClick={() => setShowKidsItem(!showKidsItem)}
          >
            Kids
            <IoChevronUpSharp className={`${showKidsItem ? 'close-menu':'open-menu'}`}  />
          </h1>
          <div className={`${showKidsItem ? 'hide-menu':'shoe-menu'}`}>
          <p>T-Shirt</p>
          <p>Shirts</p>
          <p>Jeans</p>
          <p>Trousers</p>
          <p>Party wear</p>
          </div>
        </div>
      
        <div className='side-list'>
          <h1
            style={{
              cursor:"pointer",
              
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ZIndex: "10"
              
            }}
            onClick={() => setShowIndianItem(!showIndianItem)}
          >
            Bangla & Festive Wear
            <IoChevronUpSharp className={`${showIndianItem ? 'close-menu':'open-menu'}`}  />
          </h1>
          <div  className={`${showIndianItem ? 'hide-menu':'shoe-menu'}`}>
          <p>Kurta & Kurta Set</p>
          <p>Sherwanis</p>
          </div>
        </div>
     
        <div className='side-list'>
          <h1
            style={{
              cursor:"pointer",
              
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ZIndex: "10"
              
            }}
            onClick={() => setShowWesternItem(!showWesternItem)}
          >
            Western Wear
            <IoChevronUpSharp className={`${showWesternItem ? 'close-menu':'open-menu'}`}  />
          </h1>
          <div className={`${showWesternItem ? 'hide-menu':'shoe-menu'}`}>
          <p>Dresses</p>
          <p>Jumpsuits</p>
          </div>
        </div>
    </div>
  );
};

export default SIdeBer;
