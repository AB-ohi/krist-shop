import { useEffect, useState } from "react"

const adminEventHook = () =>{
    const [adminEvent, setAdminEvent] = useState();
    useEffect(()=>{
        fetch("http://localhost:5000/events")
        .then (res => res.json())
        .then (data =>{
           if(data){
             setAdminEvent(data);
           }else{
            console.log("event data can not found", error);
           }
        })
    },[])
        return [adminEvent,setAdminEvent]
}

export default adminEventHook;