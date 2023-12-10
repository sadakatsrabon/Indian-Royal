import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import "./style.css"

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import slider6 from "../../../assets/menu/banner3.jpg";
// import slider5 from "../../../assets/home/slide5.jpg";
// import slider5 from "../../../assets/home/slide5.jpg";
// import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {


  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  })
  return (
    <section>
      <SectionTitle
        heading={"Our Food Categories"}
      ></SectionTitle>
      <div ref={sliderRef} className="keen-slider h-96 mb-12">
        <div className="keen-slider__slide number-slide1">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">Drinks</h3>
          <img className="w-72 h-full" src={slider6} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide2">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">pizzas</h3>
          <img src={slider2} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide3">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">soups</h3>
          <img src={slider3} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide4">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">desserts</h3>
          <img src={slider4} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide5">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">salads</h3>
          <img src={slider5} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide6">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">pizzas</h3>
          <img src={slider2} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide6">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">salads</h3>
          <img src={slider5} alt="Slide Image" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">salads</h3>
          <img src={slider1} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide2">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">pizzas</h3>
          <img src={slider2} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide3">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">soups</h3>
          <img src={slider3} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide4">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">desserts</h3>
          <img src={slider4} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide5">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">salads</h3>
          <img src={slider5} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide6">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">pizzas</h3>
          <img src={slider2} alt="Slide Image" />
        </div>

        <div className="keen-slider__slide number-slide6">
          <h3 className="text-3xl uppercase fixed bottom-1 bg-black opacity-50 ">salads</h3>
          <img src={slider5} alt="Slide Image" />
        </div>

      </div>
    </section>
  );
};

export default Category;