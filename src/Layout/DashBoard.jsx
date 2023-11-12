import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from "react-icons/fa";

const DashBoard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to=""><FaHome />Home</Link></li>
                        <li><Link to=""><FaShoppingCart />My Cart</Link></li>
                        <li><Link to=""><FaCalendarAlt />Reservations</Link></li>
                        <li><Link to=""><FaWallet />Payment History</Link></li>
                    </ul>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashBoard;