import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hoocks/useAuth";
import useAxiosSecure from "../../../hoocks/useAxiosSecure";
import { Chart } from "react-google-charts";

export const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: chart = {} } = useQuery({
        queryKey: ['admin-chart'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-chart')
            return res.data;
        }
    })

    return (
        <div className="w-full m-4">
            <h2 className="text-3xl">Hi, {user.displayName}</h2>

            <div className="stats shadow">

                {/* revenue */}
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value text-secondary">{chart.revenue} $</div>
                    <div className="stat-desc">30% more than last month</div>
                </div>

                {/* Food Menu */}
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Recipes</div>
                    <div className="stat-value text-primary">{chart.foodProducts}</div>
                    <div className="stat-desc">29% more than last month</div>
                </div>

                {/* User Chart */}
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">User</div>
                    <div className="stat-value text-primary">{chart.users}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                {/* Oder chart */}
                <div className="stat">
                    <div className="stat-value">Orders</div>
                    <div className="stat-title">{chart.orders}</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
            {/* Chart div */}
            <div className="mt-20 rounded-xl">
                <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
            </div>
        </div>
    );
};

export default AdminHome;