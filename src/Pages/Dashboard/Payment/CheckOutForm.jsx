import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hoocks/useAxiosSecure";
import useAuth from "../../../hoocks/useAuth";

const CheckOutForm = ({ price, cart }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);
    const [transectionId, setTransectionId] = useState();

    // console.log(clientSecret)

    useEffect(() => {
        axiosSecure.post('/create-paymetn-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.log('error-1')
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            console.log('error-2')
            return
        }
        // console.log('card', card)
        // Check Cart velidity
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.error('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('')
            // console.log('Payment Method', paymentMethod)
        }

        setLoading(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown mail',
                        name: user?.displayName || 'Stranger'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }

        // console.log(paymentIntent);
        setLoading(false)
        if (paymentIntent.status === 'succeeded') {
            setTransectionId(paymentIntent.id)

            // Save payment information to the server
            const payment = {
                price,
                email: user?.email,
                transectionId: paymentIntent.id,
                quantity: cart.length,
                itemId: cart.map(item => item._id),
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/paymens', payment)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    // display confirm
                }
            })
        }

    }

    return (
        <>
            <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {/* <div className="divider"></div> */}
                {/* <div className="text-center mt-2"> */}
                <button className="btn btn-outline btn-sm w-28 bg-yellow-400" type="submit" disabled={!stripe || !clientSecret || loading}>
                    Pay
                </button>
                {/* </div> */}
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transectionId && <p className="text-green-600 ml-8 text-center">Transection Successfulll</p>}
        </>
    );
};

export default CheckOutForm;