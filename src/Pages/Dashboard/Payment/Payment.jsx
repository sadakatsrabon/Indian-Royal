import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Payment = () => {
    return (
        <div>
            <Helmet> <title>Indian Royal || Payment</title></Helmet>
            <SectionTitle
                heading="Pay now"
            ></SectionTitle>
            <h2>Payment System Page</h2>
        </div>
    );
};

export default Payment;