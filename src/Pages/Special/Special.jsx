import MenuCategory from "../Menu/MenuCategory/MenuCategory";
import useMenu from "../../hoocks/useMenu";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuImg from '../../assets/menu/special.jpg';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Special = () => {
    const [menuItems] = useMenu();
    const offered = menuItems.filter(item => item.category === 'offered');

    const { user } = useContext(AuthContext);

    if (user) {
        return (
            <div className="">
                <Helmet>
                    <title>Indian Royal || Royal Special</title>
                </Helmet>

                <Cover bgImage={menuImg} title="royals special"></Cover>

                {/* Offered section */}
                <MenuCategory items={offered}></MenuCategory>
            </div>
        );
    }
    else {
        Swal.fire({
            position: "top-end",
            title: "Pleas SignUp First To Add Item",
            showConfirmButton: false,
            timer: 1500
        });
    }
};

export default Special;
