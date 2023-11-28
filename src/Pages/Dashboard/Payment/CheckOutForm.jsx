import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();

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
        console.log('card', card)
        // Check Cart velidity
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.error('error', error)
        }
        else {
            console.log('Payment Method', paymentMethod)
        }

    }

    return (
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
            <div className="divider"></div>
            <div className="text-center mt-2">
                <button className="btn btn-outline btn-sm w-28 bg-yellow-400" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckOutForm;