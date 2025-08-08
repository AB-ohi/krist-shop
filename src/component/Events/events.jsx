import React from "react";
import "./events.css";
import ShopEvent from "../../../public/demoImg/shopEvent.jpg";
const ShopEvents = () => {
  return (
    <div className="eventBody">
      <div className="eventImg">
        <img src={ShopEvent} alt="" />
      </div>
      <div className="eventDetails">
        <div>
          <h1 className="eventsHeading">heating</h1>
        </div>
        <div className="eventDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          soluta aut, nihil, ipsam reprehenderit nobis enim, cum officia porro
          quae non! Eum sunt nulla adipisci veniam labore sit corrupti natus.
        </div>
      </div>
    </div>
  );
};

export default ShopEvents;
