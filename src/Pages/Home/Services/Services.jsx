import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineNoFood } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import chef from "../../../assets/home/chef.jpg"

const Services = () => {
    return (
        <div className=" sm:flex mt-32 justify-around">
            <div className="w-30">
                <img className="p-4 m-4" src={chef} alt="" />
            </div>
            <div className="grid grid-cols-2 w-[100%]">
                <div className="border border-black p-4 m-8">
                    <div className="font-bold relative">
                        <div className="absolute  mt-[-30px] z-10 text-4xl p-2 text-yellow-500 bg-gray-700 rounded"><TbBrandBooking /></div>
                    </div>
                    <h4 className="uppercase font-semibold text-xl p-4 mt-4">hotel booking</h4>
                    <div className="divider"></div>
                    <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident quam, blanditiis recusandae distinctio perferendis obcaecati illum facere cupiditate excepturi minima iusto voluptas esse expedita libero cumque? Cumque .</p>
                </div>
                <div className="border border-black p-4 m-8">
                    <div className="font-bold relative">
                        <div className="absolute  mt-[-30px] z-10 text-4xl p-2 text-yellow-500 bg-gray-700 rounded"><MdOutlineNoFood /></div>
                    </div>
                    <h4 className="uppercase font-semibold text-xl p-4 mt-4">Fresh Dishrs</h4>

<div className="divider"></div>                    <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident quam, blanditiis recusandae distinctio perferendis obcaecati illum facere cupiditate excepturi minima iusto voluptas esse expedita libero cumque? Cumque .</p>
                </div>
                <div className="border border-black p-4 m-8">
                    <div className="font-bold relative">
                        <div className="absolute  mt-[-30px] z-10 text-4xl p-2 text-yellow-500 bg-gray-700 rounded"><IoFastFoodOutline /></div>
                    </div>
                    <h4 className="uppercase font-semibold text-xl p-4 mt-4">halal food</h4>
  
  <div className="divider"></div>                  <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident quam, blanditiis recusandae distinctio perferendis obcaecati illum facere cupiditate excepturi minima iusto voluptas esse expedita libero cumque? Cumque .</p>
                </div>
                <div className="border border-black p-4 m-8">
                    <div className="font-bold relative">
                        <div className="absolute  mt-[-30px] z-10 text-4xl p-2 text-yellow-500 bg-gray-700 rounded"><TbTruckDelivery /></div>
                    </div>
                    <h4 className="uppercase font-semibold text-xl p-4 mt-4">first delivery</h4
                    <div className="divider"></div>>
                    <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident quam, blanditiis recusandae distinctio perferendis obcaecati illum facere cupiditate excepturi minima iusto voluptas esse expedita libero cumque? Cumque .</p>
                </div>
            </div>
        </div>
    );
};

export default Services;