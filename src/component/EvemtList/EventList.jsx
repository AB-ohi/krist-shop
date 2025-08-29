import { useEffect, useState } from "react"

const EventList = () => {
    const [eventData, setEventData] = useState();
useEffect(()=>{
    fetch("http://localhost:5000/events")
    .then(res => res.json())
    .then(data => {
      setEventData(data)
    })
},[])

  return (
    <div>
      
    </div>
  )
}

export default EventList
