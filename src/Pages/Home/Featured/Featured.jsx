import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import hotelFeatured from '../../../assets/hotel/hotel1.jpg'

// import css 
import './Featured.css';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle heading="featured item"></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-600 bg-opacity-70 pt-20 pb-12 px-36'>
                <div className=' w-[1200px]'>
                    <img className='rounded-2xl' src={hotelFeatured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Book a luxury and resonable hotel room</p>
                    <p className='uppercase'>where can i get a rest house?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio, labore illo nostrum accusantium voluptatem deserunt? Autem soluta ad necessitatibus similique est corporis quisquam </p>
                    <Link to='/book'>
                        <button className="btn btn-outline btn-info border-0 border-y-4 bg-black bg-opacity-40 mt-4">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;