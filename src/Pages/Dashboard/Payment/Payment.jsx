import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hoocks/useCart";

// Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_paymentGetway_PK);
const Payment = () => {

    const [cart] = useCart();
    // reduce mechanism
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <Helmet> <title>Indian Royal || Payment</title></Helmet>
            
            <SectionTitle
                heading="Pay now"
            ></SectionTitle>
            <h2 className="text-center mb-6yyyyy">Please be sure after payment. I will not be returnable</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;