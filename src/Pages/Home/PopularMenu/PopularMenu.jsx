import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hoocks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {

    const [menuItems] = useMenu();
    const popularItems = menuItems.filter(item => item.category === 'popular');

    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={'Are Yor Lookin For Special One ?'}
                heading={'popualr items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 px-8">
                {
                    popularItems.map((item) => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-2">
                <Link to='/menu'><button className="btn btn-outline border-0 border-b-4">View Full Menu</button></Link>
            </div>
        </section>
    );
};

export default PopularMenu;