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
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            // const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
            //     headers: {
            //         authorization: `bearer ${token}`
            //     }
            // })
            console.log('response data from axios', response)
            return response.data;
        },
    })
    // console.log(cart)

    return [cart, refetch];
};

export default useCart;