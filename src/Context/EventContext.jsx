import { createContext, useState, useContext } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [showEvent, setShowEvent] = useState(true);
  return (
    <EventContext.Provider value={{ showEvent, setShowEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);