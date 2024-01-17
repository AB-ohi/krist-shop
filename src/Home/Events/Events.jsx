import { Link } from "react-router-dom";
import './Events.css'
import { GoArrowRight } from "react-icons/go";

const Events = () => {
  return (
    <div className="Event-main">
      <div className="event-details">
        <h1 style={{fontSize:'40px'}}>Valentine Day Events</h1>
        <p style={{fontSize:'20px', marginBottom:'30px'}}>
          {/*  eslint-disable-next-line react/no-unescaped-entities */}
          Make this Valentine's Day unforgettable with a wardrobe that mirrors
          {/*  eslint-disable-next-line react/no-unescaped-entities */}
          the beauty of your love story. Shop the Valentine's Day Collection at
          Krist and create moments that will be cherished forever. Love is in
          the air, and so is style!
        </p>

        <Link to='product' className="event-all-product">view all product <GoArrowRight /></Link>
      </div>
      <div className="event-pic">
        <img style={{width:'100%'}} src="../../../public/img/event.jpg" alt="" />
      </div>
    </div>
  );
};

export default Events;
