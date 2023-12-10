import { Link } from "react-router-dom";

const Bookin = () => {
    return (
        <div className="pt-48 pb-10">
            <h3 className="text-center text-4xl font-bold uppercase">on the way</h3>
            <h6 className="text-center text-4xl font-bold">Working on it.</h6>
            <h3 className="text-center pt-10 text-4xl text-green-700 font-bold">Please Contact To Book A <span className="text-yellow-700">ROYAL</span> Room</h3>
            <div className="text-center pt-10">
                <Link to='/contact'>
                    <button className="btn btn-outline btn-success w-72 bg-slate-900 border-0 border-y-4">CONTACT US</button></Link>
            </div>
        </div>
    );
};

export default Bookin;