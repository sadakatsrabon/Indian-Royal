import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeader = location.pathname.includes('signin') || location.pathname.includes('signup');
    return (
        <div className="bg-amber-100">
            {noHeader || <Nav></Nav>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;