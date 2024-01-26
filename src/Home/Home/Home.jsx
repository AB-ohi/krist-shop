import Bestseller from "../Bestseller/Bestseller";
import Categories from "../Categories/Categories";
import Events from "../Events/events";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header/>
            <Categories/>
            <Events/>
            <Bestseller/>
        </div>
    );
};

export default Home;