import { useState } from "react";

const portalHook = () => {
   const [isPortalOn, setIsPortalOn] = useState(true); 
   return { isPortalOn, setIsPortalOn };
};

export default portalHook;