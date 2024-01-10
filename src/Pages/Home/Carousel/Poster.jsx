import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import image1 from '../../../../assets/home/01.jpg'
import image1 from '../../../assets/home/01.jpg'
import image2 from '../../../assets/home/02.jpg'
import image3 from '../../../assets/home/03.jpg'
import image4 from '../../../assets/home/04.jpg'
import image5 from '../../../assets/home/05.png'
import image6 from '../../../assets/home/06.jpg'
import image7 from '../../../assets/home/07.jpg'
import image8 from '../../../assets/home/08.png'

import hotleimg1 from '../../../assets/hotel/hotel1.jpg'
import hotleimg2 from '../../../assets/hotel/hotel2.jpg'
import hotleimg3 from '../../../assets/hotel/hotel3.jpg'
import hotleimg4 from '../../../assets/hotel/hotel4.jpg'
import hotleimg5 from '../../../assets/hotel/hotel5.jpg'
import hotleimg6 from '../../../assets/hotel/hotel6.jpg'

const Poster = () => {
    return (
        <div className="w-full flex h-96 mb-20">
            <Carousel
                className="w-1/2"
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
            >

                <div className="h-full md:h-96">
                    <img className="h-full" src={hotleimg1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={hotleimg2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={hotleimg3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={hotleimg4} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={hotleimg5} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={hotleimg6} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <Carousel
                className="w-1/2"
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
            >
                <div className="h-full md:h-96">
                    <img className="h-full" src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={image4} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={image5} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={image6} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={image7} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="h-full md:h-96">
                    <img className="h-full" src={image8} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Poster;