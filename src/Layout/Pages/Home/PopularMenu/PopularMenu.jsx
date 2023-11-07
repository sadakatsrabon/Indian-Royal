import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../hoocks/useMenu";

const PopularMenu = () => {

    const [menuItems] = useMenu();
    const popularItems = menuItems.filter(item => item.category === 'popular');

    return (
        <section className="mb-12">
            <SectionTitle
                heading={'popualr items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularItems.map((item) => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-2">
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;