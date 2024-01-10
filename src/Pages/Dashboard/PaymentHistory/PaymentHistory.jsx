import useAuth from '../../../hoocks/useAuth';

const PaymentHistory = () => {
    const {user} = useAuth();
    return (
        <div className="p-20">
        <h2>Regular user home is Creating</h2>
        <h2 className="text-3xl">Hi, {user.displayName}</h2>
        <h2 className="text-2xl mt-20 text-center text-red-600">Working on this page. Please Skip it</h2>
    </div>
    );
};

export default PaymentHistory;