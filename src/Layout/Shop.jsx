import { Outlet } from "react-router-dom";
import SIdeBer from "../Shared/SideBer/SIdeBer";
import ShopEvents from "../component/Events/events";
import { useState } from "react";
import { useEvent } from "../Context/EventContext";

const Shop = () => {

    const { showEvent } = useEvent();
    console.log(showEvent)
  return (
    <div style={{ display: "flex", width: "100%", position: "relative" }}>
      <SIdeBer/>
      <div style={{ width: "80%" }}>
        {showEvent ? <ShopEvents /> : <Outlet />}
      </div>
    </div>
  );
};

export default Shop;
