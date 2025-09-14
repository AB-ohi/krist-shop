import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import adminEventHook from "../../Hook/adminEventHook";

const EventDetail = () => {
  const [adminEvent] = adminEventHook();
  const [currentImg, setCurrentImg] = useState(0);

  if (!adminEvent || adminEvent.length === 0) {
    return <p>Loading event...</p>;
  }

  const event = adminEvent[0];
  const totalImages = event.eventImage.length;

  const nextImage = () => setCurrentImg((prev) => (prev + 1) % totalImages);
  const prevImage = () =>
    setCurrentImg((prev) => (prev - 1 + totalImages) % totalImages);

  return (
    <div
      className="event-detail-container"
      style={{
        display: "flex",
        gap: "40px",
        padding: "20px",
        alignItems: "center",
      }}
    >
      {/* Left side details */}
      <div className="event-details" style={{ flex: 1 }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px" }}>
          {event.title}
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "15px" }}>{event.details}</p>
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          <strong>Condition:</strong> {event.condition}
        </p>
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          <strong>Discount:</strong> {event.discount}%
        </p>
      </div>

      {/* Right side carousel */}
      <div className="event-images" style={{ flex: 1, position: "relative" }}>
        <img
          src={event.eventImage[currentImg]}
          alt={event.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        {/* Carousel arrows */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            border: "none",
            color: "white",
            fontSize: "24px",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            border: "none",
            color: "white",
            fontSize: "24px",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
