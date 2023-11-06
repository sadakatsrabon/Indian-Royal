import Poster from "../Carousel/Poster";
import Category from "../Category/Category"
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/testimonials";


const Home = () => {
    return (
        <div>
            <Poster></Poster>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;