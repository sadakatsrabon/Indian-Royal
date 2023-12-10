
const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div className="flex space-x-4 px-8">
            <img className="w-[120px] h-[10
                0px] rounded-2xl" src={image} alt="" />
            <div>
                <h3 className="text-xl text-slate-500">{name}</h3>
                <p className="">{recipe}</p>
            </div>
            <div className="text-yellow-900 text-xl border-y-2 border-e-2 mt-2">
                <p className=" p-5">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;