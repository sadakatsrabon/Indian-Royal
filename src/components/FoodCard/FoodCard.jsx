
const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item;
    const handleAddToCart = item => {
        console.log(item)
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