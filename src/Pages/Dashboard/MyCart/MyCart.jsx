import { Helmet } from "react-helmet-async";
import useCart from "../../../hoocks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div>
            <Helmet>
                <title>Indian Royal || My Cart</title>
            </Helmet>
            <div className="uppercase">
                <h3>Total items of My Carts = {cart.length}</h3>
                <h3>Total Price  = {total}$</h3>
                <button className="btn btn-sm w-40 bg-yellow-400 btn-outline">Pay</button>
            </div>
        </div>
    );
};

export default MyCart;