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
            <h2 className="text-3xl">Hi, {user.displayName}</h2>
            <h2 className="text-2xl mt-20 text-center text-red-600 mb-10">Working on this page. Please Skip it</h2>

            <div className="stats shadow">

                <div className="stat place-items-center">
                    <div className="stat-title">Order on process</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Payment Histry</div>
                    <div className="stat-value text-secondary"> <h2 className="text-2xl">{chart.userPayment || 0} $</h2></div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Process Order</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div >
    );
};

export default UserHome;