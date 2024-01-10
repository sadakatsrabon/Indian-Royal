import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper things
import { Pagination } from 'swiper/modules';

import './Style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// react rating
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [rating, setRating] = useState([]);
    console.log(rating);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setRating(reviews.rating)
            })
    }, [])

    return (
        <section>
            <SectionTitle heading="Clients Reviews"></SectionTitle>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="mb-20 mt-10">
                            <div className="card w-[1000px] h-50 bg-neutral text-neutral-content mx-auto">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{review.name}</h2>
                                    <p>{review.details}</p>
                                    <div className="card-actions justify-end w-44">
                                        <Rating
                                            value={review.rating}
                                            onChange={setRating}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;