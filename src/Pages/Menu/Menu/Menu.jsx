import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";

import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

import useMenu from "../../../hoocks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menuItems] = useMenu();
    const populars = menuItems.filter(item => item.category === 'popular');
    const meats = menuItems.filter(item => item.category === 'meat');
    const fishs = menuItems.filter(item => item.category === 'fish');
    const eggs = menuItems.filter(item => item.category === 'egg');
    const prawns = menuItems.filter(item => item.category === 'prawn');
    const rices = menuItems.filter(item => item.category === 'rice');
    const roti_pastas = menuItems.filter(item => item.category === 'roti_pastaa');
    const complete_meals = menuItems.filter(item => item.category === 'complete_meal');
    const salad_raitas = menuItems.filter(item => item.category === 'salad_raita');
    const soups = menuItems.filter(item => item.category === 'soup');
    const desserts = menuItems.filter(item => item.category === 'dessert');
    const drinks = menuItems.filter(item => item.category === 'drinks');


    return (
        <div>
            <Helmet>
                <title>Indian Royal || Menu</title>
            </Helmet>
            <Cover bgImage={menuImg} title="royal menu's"></Cover>

            {/* Main of the cover section */}
            <SectionTitle subHeading="Dont Miss Todays " heading="Royal's Offers "
            ></SectionTitle>


            {/* Popular Menu Items */}
            <MenuCategory
                items={populars}
                title="popular"
                img={soupImg}
            ></MenuCategory>

            {/* Meat Items */}
            <MenuCategory
                items={meats}
                title="meat"
                img={dessertImg}
            ></MenuCategory>


            {/* Fish Items */}
            <MenuCategory
                items={fishs}
                title="fish"
                img={saladImg}
            ></MenuCategory>

            {/* Eggs Items */}
            <MenuCategory
                items={eggs}
                title="egg"
                img={pizzaImg}
            ></MenuCategory>

            {/* Prawns Items */}
            <MenuCategory
                items={prawns}
                title="praun"
                img={dessertImg}
            ></MenuCategory>
            {/* Rice Items */}
            <MenuCategory
                items={rices}
                title="rice"
                img={soupImg}
            ></MenuCategory>

            {/* Rotu-pasta Items */}
            <MenuCategory
                items={roti_pastas}
                title="roti_pasta"
                img={dessertImg}
            ></MenuCategory>

            {/* CompleteMeals Items */}
            <MenuCategory
                items={complete_meals}
                title="complete_meal"
                img={pizzaImg}
            ></MenuCategory>

            {/* Salad Items */}
            <MenuCategory
                items={salad_raitas}
                title="salad_raita"
                img={saladImg}
            ></MenuCategory>

            {/* Soup Items */}
            <MenuCategory
                items={soups}
                title="soup"
                img={dessertImg}
            ></MenuCategory>


            {/* Desserts Items */}
            <MenuCategory
                items={desserts}
                title="dessert"
                img={dessertImg}
            ></MenuCategory>

            {/* Drinks Items */}
            <MenuCategory
                items={drinks}
                title="drinks"
                img={dessertImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;