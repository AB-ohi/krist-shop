import SIdeBer from "../../Shared/SideBer/SIdeBer";
import Cart from "./Cart/Cart";

const Shop = () => {
    return (
        <div style={{display:'flex', width:'100%', position:'relative'}}>
            <SIdeBer/>
            <Cart/>
        </div>
    );
};

export default Shop;