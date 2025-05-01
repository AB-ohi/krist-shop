import Bestseller from "../Bestseller/Bestseller";
import Categories from "../Categories/Categories";
import Comment from "../Comment/Comment";
import Events from "../Events/events";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header />
            <Categories/>
            <Bestseller/>
            <Events/>
            <Comment/>
        </div>
    );
};

export default Home;