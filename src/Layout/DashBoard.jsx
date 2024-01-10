import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensilSpoon, FaBook, FaUsers } from "react-icons/fa";
import useCart from "../hoocks/useCart";
import useAdmin from "../hoocks/useAdmin";
import useMenu from "../hoocks/useMenu";
import { RiMenuUnfoldLine } from "react-icons/ri";

const DashBoard = () => {
    const [cart] = useCart();
    const [menu] = useMenu()

    const [isAdmin] = useAdmin();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-Outline  border-x-4 drawer-button lg:hidden"><RiMenuUnfoldLine />
                    </label>
                    <Outlet />
                </div>
                <div className="drawer-side bg-opacity-80">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    {
                        isAdmin ?
                            <>
                                <div className="bg-emerald-600 opacity-90 h-full">
                                    {/* Sidebar content here */}
                                    <ul className="menu p-4 w-80 min-h-full text-base-content">
                                        <li><NavLink to="/dashboard/adminhome"><FaHome />Adim Home</NavLink></li>
                                        <li>
                                            <NavLink to="/dashboard/addItem"><FaUtensilSpoon />Add Items</NavLink>
                                        </li>
                                        <li><NavLink to="/dashboard/manageitem"><FaCalendarAlt />Manage Items<span className="abdge badge-primary rounded-md px-2">{menu?.length || 0}</span></NavLink></li>
                                        <li><NavLink to="/dashboard/manageBooking"><FaBook />Manage Booking</NavLink></li>
                                        <li><NavLink to="/dashboard/allusers"><FaUsers />All Users</NavLink></li>
                                        <div className="divider"></div>
                                        <li><NavLink to="/"><FaHome />Home</NavLink></li>
                                        <li><NavLink to="/menu">Royal Menu</NavLink></li>
                                        <li><NavLink to="/Order/salad">Royal Food</NavLink></li>
                                    </ul>
                                </div>
                            </> : <>
                                <div className="bg-slate-300 opacity-90 h-full">
                                    {/* Sidebar content here */}
                                    <ul className="menu p-4 w-80 min-h-full text-base-content">
                                        <li><NavLink to="/dashboard/userhome"><FaHome />Home</NavLink></li>
                                        <li>
                                            <NavLink to="/dashboard/mycart"><FaShoppingCart />My Cart <span className="abdge badge-primary rounded-md px-2">+{cart?.length || 0}</span></NavLink>
                                        </li>
                                        <li><NavLink to="/dashboard/reservation"><FaCalendarAlt />Reservations</NavLink></li>
                                        <li><NavLink to="/dashboard/payHistory"><FaWallet />Payment History</NavLink></li>
                                        <div className="divider"></div>
                                        <li><NavLink to="/"><FaHome />Home</NavLink></li>
                                        <li><NavLink to="/menu">Royal Menu</NavLink></li>
                                        <li><NavLink to="/Order/salad">Return To Food Order</NavLink></li>
                                    </ul>
                                </div>
                            </>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashBoard;