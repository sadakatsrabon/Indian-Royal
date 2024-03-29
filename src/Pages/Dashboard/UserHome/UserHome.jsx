import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hoocks/useAuth";
import useAxiosSecure from "../../../hoocks/useAxiosSecure";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Total Order", 11],
    ["Payments", 22],
    ["Hotel booking", 2],
    // ["Watch TV", 2],
    // ["Sleep", 7],
];

export const options = {
    title: "Your Activity",
};

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
            <h2 className="text-3xl text-center">Royal Activities of {user.displayName}</h2>
            <div className="divider"></div>
            {/* Stats */}
            <div className="stats shadow flex justify">
                <div className="stat place-items-center">
                    <div className="stat-title">Order on process</div>
                    <div className="stat-value">2 Item</div>
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
            {/* Chart div */}
            <div className="mt-20 rounded-xl flex w-[100%]">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"90%"}
                    height={"200px"}
                    className="rounded-lg"
                />
            </div>
        </div >
    );
};

export default UserHome;