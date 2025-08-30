import { useEffect, useState } from "react";
import { MdOutlineEvent } from "react-icons/md";

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
    <div >
      {eventData?.map((singleDat, index) => {
        return (
          <div style={{marginBottom:'10px'}} id={index}>
            <div style={{display:"flex", alignItems:"center"}}>
              <MdOutlineEvent />
              <p style={{}}>{singleDat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
