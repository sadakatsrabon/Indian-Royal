import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../../assets/home/featured.jpg'

// import css 
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle heading="featured item"></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-600 bg-opacity-70 pt-20 pb-12 px-36'>
                <div>
                    <img className='rounded-2xl' src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>11 August 2000</p>
                    <p className='uppercase'>where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio, labore illo nostrum accusantium voluptatem deserunt? Autem soluta ad necessitatibus similique est corporis quisquam nobis, veniam eum, exercitationem iusto corrupti magni saepe fugiat id facere dolorem voluptatem facilis dignissimos. Neque voluptatum, quo possimus cumque ex id! Corporis ducimus amet dignissimos.</p>
                    <button className="btn btn-outline btn-info border-0 border-y-4 bg-black bg-opacity-40 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;