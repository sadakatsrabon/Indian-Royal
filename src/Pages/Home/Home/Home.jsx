import { Helmet } from "react-helmet-async";
import Poster from "../Carousel/Poster";
import Services from "../Services/Services";
import Category from "../Category/Category"
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

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