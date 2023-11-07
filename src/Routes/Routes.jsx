import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import Menu from "../Layout/Pages/Menu/Menu/Menu";
import Order from "../Layout/Pages/Order/Order/Order";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order',
                element: <Order></Order>
            }
        ]
    },
]);