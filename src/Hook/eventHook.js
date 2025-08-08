import  { useState } from "react";

const eventHook = () => {
  const [showEvent, setShowEvent] = useState(true);
  return showEvent, setShowEvent;
};

export default eventHook;
