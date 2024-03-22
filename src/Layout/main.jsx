import NavBer from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import './main.css'

const Main = () => {
    return (
        <div>
            <NavBer className="nav"/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;