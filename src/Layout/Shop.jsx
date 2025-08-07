import { Outlet } from "react-router-dom";
import SIdeBer from "../Shared/SideBer/SIdeBer";

const Shop = () => {
    return (
        <div style={{display:'flex', width:'100%', position:'relative'}}>
            <SIdeBer/>
            <Outlet/>
        </div>
    );
};

export default Shop;