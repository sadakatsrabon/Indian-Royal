import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Nav from "../Pages/Shared/Nav/Nav";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeader = location.pathname.includes('signin');
    return (
        <div className="bg-amber-100">
            {noHeader || <Nav></Nav>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;