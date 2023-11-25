import { Helmet } from "react-helmet-async";
import useCart from "../../../hoocks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    // Reduce machanism
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = cartItem => {
        Swal.fire({
            title: "Are you sure to delete ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${cartItem._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        // toDo:
                        //  is undefined.
                        // Need to solve it.
                        // And refetch is not working properly with the swal

                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                        }
                    })
            }
        });
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Indian Royal || My Cart</title>
            </Helmet>
            <div>
                <div className="uppercase font-semibold flex justify-around mt-20 text-xl">
                    <h3>Total items = {cart.length}</h3>
                    <h3>Total Price  = {total}$</h3>
                </div>
                <div className="text-center mt-10">
                    <button className="btn btn-sm w-56 md:w-96 bg-yellow-400 btn-outline">Pay</button>
                </div>
                <div className="divider"></div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className="">Food</th>
                            <th>Item Name</th>
                            <th className="text-end">Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Row  */}
                        {
                            cart.map((cartItem, index) =>
                                <tr key={cartItem._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cartItem.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {cartItem.name}
                                    </td>
                                    <td className="text-end">${cartItem.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(cartItem)} className="btn btn-outline bg-red-400 btn-xs">X</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;