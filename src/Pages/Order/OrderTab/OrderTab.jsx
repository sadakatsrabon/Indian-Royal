import FoodCard from "../../../components/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({ items }) => {
    return (

        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid sm:grid-cols-2 p-10 bg-green-200 pt-6 md:grid-cols-3 2xl:grid-cols-4 gap-10'>
                        {
                            items.map(item =>
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                >
                                </FoodCard>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </>


    );
};

export default OrderTab;