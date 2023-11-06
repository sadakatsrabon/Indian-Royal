import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
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
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('testimonials.json')
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
                            {/* users reviews stars */}
                            <div>
                                <div className="mx-auto" style={{ maxWidth: 180, width: '100%' }}>
                                    <Rating
                                        value={review.rating}
                                        onChange={setRating}
                                    />
                                    <button className="btn btn-outline btn-error btn-sm" type="button" onClick={() => setRating(0)}>
                                        Reset
                                    </button>
                                </div>
                            </div>
                            {/* additional reviews */}
                            <p>{review.details}</p>
                            <h3 className="text-2xl">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;