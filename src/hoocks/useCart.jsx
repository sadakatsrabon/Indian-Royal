import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const { user } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            // SConfusion : axios secure.get/put
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            // const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
            //     headers: {
            //         authorization: `bearer ${token}`
            //     }
            // })
            console.log('res data from axios', res)
            return res.data;
        },
    })
    // console.log(cart)

    return [cart, refetch];
};

export default useCart;