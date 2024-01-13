import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper/modules';
 
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
        <div className='sm:flex justify-around p-10'>
          <div className='my-auto mb-10'>
            <h2 className='text-6xl font-bold'>Hi sir,</h2>
            <h2 className='text-3xl'>Try to see our halal Royal Food category</h2>

            <p className='md:w-96'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse corporis quibusdam porro dolore debitis nobis ullam explicabo commodi adipisci, accusantium ipsa inventore, minima dolorum praesentium dolorem quasi, molestias ipsam. Minima.</p>
          </div>
          <div className='w-72 rounded-2xl'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Salad</h2>
                  <img className="w-72 h-full" src={slider1} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Soup</h2>
                  <img className="w-72 h-full" src={slider2} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Dessert</h2>
                  <img className="w-72 h-full" src={slider3} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Drinks</h2>
                  <img className="w-72 h-full" src={slider4} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Meet</h2>
                  <img className="w-72 h-full" src={slider5} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Prawn</h2>
                  <img className="w-72 h-full" src={slider1} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Fish</h2>
                  <img className="w-72 h-full" src={slider2} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Egg</h2>
                  <img className="w-72 h-full" src={slider3} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Rice</h2>
                  <img className="w-72 h-full" src={slider4} alt="Slide Image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className='text-xl font-bold'>Full Meal</h2>
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