// import logo from '../../../../assets/logo.png';
import logo1 from '../../../../assets/logo1.png';
import { Link } from "react-router-dom";

const Nav = () => {

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order">Order Food</Link></li>
    </>

    return (
        <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 bg-opacity-80 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                </a>
                <Link to="/"><img className='w-36 rounded-lg' src={logo1} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Nav;




{/* <li tabIndex={0}>
    <details>
        <summary>Parent</summary>
        <ul className="p-2 bg-slate-900 bg-opacity-80 rounded-box">
            <li><Link>SNav1</Link></li>
            <li><a>SNav2</a></li>
        </ul>
    </details>
</li> */}