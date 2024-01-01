import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineNoFood } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import chef from "../../../assets/home/chef.jpg"

const Services = () => {
    return (
        <div className="flex mt-32 justify-around">
            <h2 className="text-5xl my-auto">{chef}</h2>
            <div>
                <div className="border border-black p-4 m-8">
                    <div className="font-bold relative">
                        <div className="absolute  mt-[-30px] z-10 text-4xl text-yellow-500 bg-gray-700 rounded"><TbBrandBooking /></div>
                    </div>
                    <h4 className="uppercase font-semibold text-xl">hotel booking</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident quam, blanditiis recusandae distinctio perferendis obcaecati illum facere cupiditate excepturi minima iusto voluptas esse expedita libero cumque? Cumque illo expedita laudantium nisi? Ipsam est corporis soluta cumque corrupti a rerum numquam, perspiciatis reprehenderit itaque distinctio quasi, aut possimus ea? Itaque.</p>
                </div>
                <div className="border border-black p-4 m-8">
                    <div className="font-bold relative">
                        <div className="absolute  mt-[-30px] z-10 text-4xl text-yellow-500 bg-gray-700 rounded"><MdOutlineNoFood /></div>
                    </div>
                    <h4 className="uppercase font-semibold text-xl">Fresh Dishrs</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident quam, blanditiis recusandae distinctio perferendis obcaecati illum facere cupiditate excepturi minima iusto voluptas esse expedita libero cumque? Cumque illo expedita laudantium nisi? Ipsam est corporis soluta cumque corrupti a rerum numquam, perspiciatis reprehenderit itaque distinctio quasi, aut possimus ea? Itaque.</p>
                </div>
                <div className="border border-black p-4 m-8">
                    <div className="font-bold relative">
                        <div className="absolute  mt-[-30px] z-10 text-4xl text-yellow-500 bg-gray-700 rounded"><IoFastFoodOutline /></div>
                    </div>
                    <h4 className="uppercase font-semibold text-xl">halal food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident quam, blanditiis recusandae distinctio perferendis obcaecati illum facere cupiditate excepturi minima iusto voluptas esse expedita libero cumque? Cumque illo expedita laudantium nisi? Ipsam est corporis soluta cumque corrupti a rerum numquam, perspiciatis reprehenderit itaque distinctio quasi, aut possimus ea? Itaque.</p>
                </div>
                <div className="border border-black p-4 m-8">
                    <div className="font-bold relative">
                        <div className="absolute  mt-[-30px] z-10 text-4xl text-yellow-500 bg-gray-700 rounded"><TbTruckDelivery /></div>
                    </div>
                    <h4 className="uppercase font-semibold text-xl">first delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident quam, blanditiis recusandae distinctio perferendis obcaecati illum facere cupiditate excepturi minima iusto voluptas esse expedita libero cumque? Cumque illo expedita laudantium nisi? Ipsam est corporis soluta cumque corrupti a rerum numquam, perspiciatis reprehenderit itaque distinctio quasi, aut possimus ea? Itaque.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;