import { useEffect, useState } from "react";
import { MdOutlineEvent } from "react-icons/md";
import "./EventList.css"
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const EventList = () => {
  const [eventData, setEventData] = useState();
  console.log(eventData);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setEventData(data);
      });
  }, []);

  return (
    <div className="event_list_main">
      {eventData?.map((singleData, index) => {
        return (
          <div className="event_list" id={index}>
            <div className="event_title_area">
              <MdOutlineEvent />
              <p>{singleData.title}</p>
            </div>
               <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="event_img"
            >
              {singleData.eventImage?.map((image, i) => (
                <SwiperSlide key={i}>
                  <img src={image} alt={`event-${index}-${i}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
