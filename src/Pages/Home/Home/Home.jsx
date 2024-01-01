import { Helmet } from "react-helmet-async";
import Poster from "../Carousel/Poster";
import Category from "../Category/Category"
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/testimonials";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Indian Royal || Home</title>
            </Helmet>
            <Poster></Poster>
            <Services></Services>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;