import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hoocks/useAuth";
import useAxiosSecure from "../../../hoocks/useAxiosSecure";

const UserHome = () => {
    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();

    const { data: chart = {} } = useQuery({
        queryKey: ['user-chart'],
        queryFn: async () => {
            const res = await axiosSecure('/user-chart');
            return res.data;
        }
    });
    return (
        <div className="p-20">
            <h2>Regular user home is Creating</h2>
            <h2 className="text-3xl">Hi, {user.displayName}</h2>
            <h2 className="text-2xl">Payment : {chart.userPayment || 0} $</h2>
            <h2 className="text-2xl mt-20 text-center text-red-600">Working on this page. Please Skip it</h2>
        </div>
    );
};

export default UserHome;