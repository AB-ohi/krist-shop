import { Outlet } from "react-router-dom";
import SIdeBer from "../Shared/SideBer/SIdeBer";
import ShopEvents from "../component/Events/events";

const Shop = () => {
    return (
        <div style={{display:'flex', width:'100%', position:'relative'}}>
            <SIdeBer/>
            <div style={{width:'80%'}}>
                <ShopEvents/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Shop;