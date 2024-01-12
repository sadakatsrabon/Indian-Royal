import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper/modules';

// 
// 
// 


import "keen-slider/keen-slider.min.css";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <>
        <SectionTitle
          heading={"Our Food Categories"}
        ></SectionTitle>
        <div className='flex justify-around'>
          <div>
<h2 className='text-6xl font-bold'>Hi sir,</h2>
<h2>You can see our royal category</h2>
          </div>
          <div className='w-72'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider1} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider2} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider3} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider4} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider5} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider1} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider2} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider3} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider4} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Category</h2>
                  <img className="w-72 h-full" src={slider5} alt="Slide Image" />
                </div>
              </SwiperSlide>
            </Swiper>
            
          </div>
        </div>
      </>
    </section>
  );
};

export default Category;