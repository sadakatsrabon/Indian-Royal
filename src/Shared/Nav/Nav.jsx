import { useContext } from 'react';
import logo1 from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hoocks/useCart';
import useAdmin from '../../hoocks/useAdmin';
import { FiLogOut } from "react-icons/fi";

const Nav = () => {

    const [isAdmin] = useAdmin();

    // Access of user form auth context for signOut
    const { user, signOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleSignOut = async () => {
        await signOut()
            .then(() => { })
            .catch(error => console.error(error));
    };

    const navOptions = <>

        <li><Link to="/menu"><button className='btn-outline text-white bg-black p-2 bg-opacity-40 uppercase font-semibold rounded-md'>Food Menu</button></Link></li>

        <li><Link to="/order/:salad"><button className='btn-outline text-white bg-black p-2 bg-opacity-40 uppercase font-semibold rounded-md'>Order Food</button></Link></li>

        <li><Link to={!isAdmin ? '/dashboard/userhome' : 'dashboard/adminhome'}><button className='btn-outline text-white bg-black p-2 bg-opacity-40 uppercase font-semibold rounded-md'>Dashboard</button></Link></li>

        <li><Link to="/dashboard/mycart">
            <button className="">
                
                {!isAdmin ? <div className="badge mt-2 ml-[-20px]"><FaShoppingCart></FaShoppingCart>+{cart?.length || 0}</div> : ''}
            </button>
        </Link></li>


        {
            user ? <>
                <li><button onClick={handleSignOut} className='btn-outline text-black bg-red-500 mt-2'><FiLogOut /></button></li>
            </> : <>
                <li><Link to="/signin"><button className='btn-outline text-white bg-black p-2 bg-opacity-40 uppercase font-semibold rounded-md'>Sign In</button></Link></li>
            </>
        }
    </>

    return (
        <div className="navbar h-1 fixed md:relative z-10 max-w-screen-xl bg-opacity-30 md:bg-opacity-100 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 bg-opacity-80 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/"><img className='w-36 rounded-lg' src={logo1} alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <p className="">{user?.displayName || 'Guest'}</p>
            </div>
        </div>
    );
};

export default Nav;