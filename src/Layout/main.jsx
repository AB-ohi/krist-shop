import NavBer from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavBer/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;