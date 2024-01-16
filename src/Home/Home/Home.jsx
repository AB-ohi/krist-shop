import Categories from "../Categories/Categories";
import Events from "../Events/events";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header/>
            <Categories/>
            <Events/>
        </div>
    );
};

export default Home;