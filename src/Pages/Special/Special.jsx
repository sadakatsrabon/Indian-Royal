import MenuCategory from "../Menu/MenuCategory/MenuCategory";
import useMenu from "../../hoocks/useMenu";
import { Helmet } from "react-helmet-async";

const Special = () => {
    const [menuItems] = useMenu();
    const offered = menuItems.filter(item => item.category === 'offered');
    return (
        <div className="">
             <Helmet>
                <title>Indian Royal || Royal Special</title>
            </Helmet>

            {/* Offered section */}
            <MenuCategory items={offered}></MenuCategory>
        </div>
    );
};

export default Special;
{/* <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /> */}