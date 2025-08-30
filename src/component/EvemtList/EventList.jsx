import { useEffect, useState } from "react";
import { MdOutlineEvent } from "react-icons/md";
import "./EventList.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
            <div>
               <Carousel>
                {
                  singleData.eventImage?.map((image,i)=>{
                  return( <div id={i}>
                      <img src={image} alt={`event-${index}-${i}`} />
                    </div>)
                  })
                }
                
            </Carousel>
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
