import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../../assets/menu/banner3.jpg';
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../../hoocks/useMenu";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = ({ img }) => {

    const [menuItems] = useMenu();
    const desserts = menuItems.filter(item => item.category === 'dessert');
    const pizzas = menuItems.filter(item => item.category === 'pizza');
    const salads = menuItems.filter(item => item.category === 'salad');
    const soups = menuItems.filter(item => item.category === 'soup');
    const offered = menuItems.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Indian Royal || Menu</title>
            </Helmet>
            <Cover bgImage={menuImg} title="royal menu's"></Cover>
            {/* Main of the cover section */}
            <SectionTitle subHeading="Dont Miss Todays " heading="Royal's Offers "
            ></SectionTitle>
            {/* Offered section */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert Items */}
            <MenuCategory
                items={desserts}
                title="Desserts"
                img={dessertImg}
            ></MenuCategory>
            {/* Pizza Menu Items */}
            <MenuCategory
                items={pizzas}
                title="Pizza"
                img={pizzaImg}
            ></MenuCategory>
            {/* Salad Menu Items */}
            <MenuCategory
                items={salads}
                title="Salad"
                img={saladImg}
            ></MenuCategory>
            {/* Soup Menu Items */}
            <MenuCategory
                items={soups}
                title="Soup"
                img={soupImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;