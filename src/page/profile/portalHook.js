import { useState } from "react";

const portalHook = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [isPortalOn, setIsPortalOn] = useState(true); 
   return { isPortalOn, setIsPortalOn };
};

export default portalHook;