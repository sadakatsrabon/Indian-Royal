
const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div className="flex space-x-4">
            <img className="w-[120px] rounded-full" src={image} alt="" />
            <div>
                <h3 className="text-green-500">{name}</h3>
                <p className="">{recipe}</p>
            </div>
           <div className="text-blue-600 border-y-2 border-e-2 mt-2">
           <p className=" p-5">${price}</p>
           </div>
        </div>
    );
};

export default MenuItem;