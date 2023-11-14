import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensilSpoon, FaBook, FaUsers } from "react-icons/fa";
import useCart from "../hoocks/useCart";

const DashBoard = () => {
    const [cart] = useCart();

    // ToDo: Load data from the server to have dynamic isAdmin based on data
    const isAdmin = true;

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-yellow-400 bg-opacity-80">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    {
                        isAdmin ?
                            <>
                                {/* Sidebar content here */}
                                <ul className="menu p-4 w-80 min-h-full text-base-content">
                                    <li><NavLink to="/dashboard/allusers"><FaHome />Adim Home</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/mycart"><FaUtensilSpoon />Add Items<span className="abdge badge-primary rounded-md px-2">+{cart?.length || 0}</span></NavLink>
                                    </li>
                                    <li><NavLink to="/dashboard/reservarions"><FaCalendarAlt />Manage Items</NavLink></li>
                                    <li><NavLink to="/dashboard/payments"><FaBook />Manage Booking</NavLink></li>
                                    <li><NavLink to="/dashboard/payments"><FaUsers />All Users</NavLink></li>
                                    <div className="divider"></div>
                                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                                    <li><NavLink to="/menu">Royal Menu</NavLink></li>
                                    <li><NavLink to="/Order/salad">Royal Food</NavLink></li>
                                </ul>
                            </> : <>
                                {/* Sidebar content here */}
                                <ul className="menu p-4 w-80 min-h-full text-base-content">
                                    <li><NavLink to="/dashboard/home"><FaHome />Home</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/mycart"><FaShoppingCart />My Cart <span className="abdge badge-primary rounded-md px-2">+{cart?.length || 0}</span></NavLink>
                                    </li>
                                    <li><NavLink to="/dashboard/reservarions"><FaCalendarAlt />Reservations</NavLink></li>
                                    <li><NavLink to="/dashboard/payments"><FaWallet />Payment History</NavLink></li>
                                    <div className="divider"></div>
                                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                                    <li><NavLink to="/menu">Royal Menu</NavLink></li>
                                    <li><NavLink to="/Order/salad">Royal Food</NavLink></li>
                                </ul>
                            </>
                    }

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashBoard;