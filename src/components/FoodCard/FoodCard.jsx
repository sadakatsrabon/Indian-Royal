import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hoocks/useCart";

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [, refetch] = useCart();

    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = { foodId: _id, name, image, price, email: user.email }
            fetch('https://server-indian-royal.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {

                        refetch();

                        // Showing Success Alart
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Item Has Been Added To Cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            // Showing Success Alart
            Swal.fire({
                position: "top-end",
                title: "Pleas SignUp First To Add Item",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/signin', { state: { form: location } })
        }
    }
    return (
        <div>
            <div className="card h-[450px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h4 className="text-2xl absolute text-indigo-700 font-semi-bold  rounded-lg px-10 bg-slate-400 bg-opacity-30 top-0 z-10"> $ {price}</h4>
                    <p>{recipe}</p>
                    <div className="card-actions flex">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary btn-outline border-0 border-y-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;