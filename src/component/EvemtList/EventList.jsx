import { useEffect, useState } from "react";
import { MdOutlineEvent } from "react-icons/md";
import "./EventList.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Swal from "sweetalert2";

const EventList = ({eventData, setEventData}) => {


  const handelDeleteEvent = (EventId)=>{
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
         showClass: {
           popup: "animate__animated animate__fadeInDown animate__faster",
         },
         hideClass: {
           popup: "animate__animated animate__fadeOutUp animate__faster",
         },
       }).then((result) =>{
        if(result.isConfirmed){
          fetch(`http://localhost:5000/events/${EventId._id}`,{
            method:"DELETE",
          }).then((response)=>{
            if(response.ok){
              setEventData((prev)=>
                prev.filter((events)=> events._id !==EventId._id)
              )
            }
          })
        }
        else{
          
        }
       })
  }

  return (
    <div className="event_list_main">
      {eventData?.map((singleData, index) => {
        return (
          <div className="event_list" id={index}>
            <div className="event_title_area">
              <MdOutlineEvent />
              <p>{singleData.title}</p>
            </div>
            <div className="event_content">
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

              <div className="details_area">
                <p style={{ fontWeight: "bolder", fontSize: "15px" }}>
                  {singleData.details}
                </p>
                <div className="event_Condition_area">
                  <div>
                    <p style={{ marginTop: "10px" }}>
                      Discount:{" "}
                      <span style={{ color: "green" }}>
                        {singleData.discount}%
                      </span>
                    </p>
                    <p style={{ marginTop: "10px", fontSize: "10px" }}>
                      {singleData.condition}
                    </p>
                  </div>
                  <button onClick={()=>handelDeleteEvent(singleData)} className="delete-btn">Delete</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
