import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover bgImage={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 my-16 w-[90%]">
                {
                    items.map((item) => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className=" text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline w-96 text-white border-0 border-y-4 bg-black bg-opacity-40 mt-4">Order Royal {title}</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;