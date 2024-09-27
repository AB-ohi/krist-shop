import { useState } from "react";

const useShowMenu = () => {
    const [OnShopMenu, setOnShopMenu] = useState(true);
    return {  
        OnShopMenu,setOnShopMenu
    };
};

export default useShowMenu;