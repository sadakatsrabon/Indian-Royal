
const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div className="border border-black rounded-lg">
            <div className="flex flex-row-reverse justify-between space-x-4 px-8">
                <img className="w-[120px] h-[100px] my-auto pt-4" src={image} alt="" />
                <div>
                    <h3 className="text-xl text-slate-500">{name}</h3>
                    <p className="">{recipe}</p>
                </div>
            </div>
            <div className="text-pink-700 font-semibold text-xl ml-8">
                <p className=" px-5 pb-1">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;