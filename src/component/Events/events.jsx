import React from "react";
import { motion } from "framer-motion";
import adminEventHook from "../../Hook/adminEventHook";
import "./events.css";

const ShopEvents = () => {
  const [adminEvent] = adminEventHook();

  if (!adminEvent || adminEvent.length === 0) {
    return <p>Loading events...</p>;
  }

  return (
    <div className="eventsContainer">
      {adminEvent.map((event, index) => (
        <motion.div
          className="eventBody"
          key={event._id || index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {/* বাম পাশে image */}
          <div className="eventImg">
            {event.eventImage?.[0] ? (
              <div className="eventImgWrapper">
                <img src={event.eventImage[0]} alt={event.title} />
                <span className="discountBadge">-{event.discount}%</span>
              </div>
            ) : (
              <div className="noImg">No Image</div>
            )}
          </div>

          {/* ডান পাশে details */}
          <div className="eventDetails">
            <h1 className="eventsHeading">{event.title}</h1>
            <p className="eventDescription">{event.details}</p>
            <p className="eventCondition">
              <strong>Condition:</strong> {event.condition}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ShopEvents;
