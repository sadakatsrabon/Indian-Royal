import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_paymentGetway_PK);
const Payment = () => {
    return (
        <div>
            <Helmet> <title>Indian Royal || Payment</title></Helmet>
            <SectionTitle
                heading="Pay now"
            ></SectionTitle>
            <h2>Payment System Page</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;