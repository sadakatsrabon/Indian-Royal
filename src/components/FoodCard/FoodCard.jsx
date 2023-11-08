
const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div>
            <div className="card h-[450px] bg-base-100 shadow-xl relative">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h4 className="text-2xl absolute text-indigo-700 font-semi-bold bg-black bg-opacity-10 rounded-lg px-10 top-0 z-10"> $ {price}</h4>
                    <p>{recipe}</p>
                    <div className="card-actions flex">
                        <button className="btn btn-primary btn-outline">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;