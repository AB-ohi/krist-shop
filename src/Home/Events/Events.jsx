import React, { useState, useEffect } from "react";
import adminEventHook from "../../Hook/adminEventHook";
import discount_BG from "../../../public/img/discount_background.png";

const EventDetail = () => {
  const [adminEvent] = adminEventHook();
  const [currentImg, setCurrentImg] = useState(0);

  const totalImages = adminEvent?.[0]?.eventImage?.length || 0;

  useEffect(() => {
    if (totalImages === 0) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % totalImages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalImages]);

  if (!adminEvent || adminEvent.length === 0) {
    return <p>Loading event...</p>;
  }

  const event = adminEvent[0];

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px" }}
        >
          {event.title}
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "15px" }}>
          {event.details}
        </p>
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          <strong>Condition:</strong> {event.condition}
        </p>
      </div>

      <div style={{ flex: 1, position: "relative" }}>
        <div>
          <img
            src={discount_BG}
            style={{
              position: "absolute",
              width: "142px",
              zIndex: "0",
              left: "-40px",
              top: "-21px",
              transform: "rotate(342deg)",
            }}
            alt=""
          />
          <p
            style={{
              fontSize: "16px",
              marginBottom: "15px",
              position: "absolute",
              zIndex: "10",
              color: "white",
              left: "16px",
              top: "-14px",
              transform: "rotate(329deg)",
              fontWeight: "bold",
            }}
          >
            {event.discount} <br />%
          </p>
        </div>
        {totalImages > 0 && (
          <img
            src={event.eventImage[currentImg]}
            alt={event.title}
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "8px",
              objectFit: "cover",
              transition: "all 0.5s ease",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EventDetail;
