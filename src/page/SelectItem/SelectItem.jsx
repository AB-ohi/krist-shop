import React from "react";
import { Link, Outlet } from "react-router-dom";
import cartHook from "../../Hook/cartHook";
import Cart from "../../component/Cart/Cart";

const SelectItem = () => {
const [cart] = cartHook()
  return (
    <div className="cart">
      {
        cart? 
          <Cart/>
        :
        
          <Outlet/>
        
      }
      {/* <Cart/>
      <Outlet /> */}
    </div>
  );
};

export default SelectItem;
