import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menuItems, setMenuItems] = useState([]);
    // console.log(menuItems)

    useEffect(() => {
        fetch('menuData.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenuItems(popularItems);
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading={'popualr items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menuItems.map((item) => <MenuItem
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