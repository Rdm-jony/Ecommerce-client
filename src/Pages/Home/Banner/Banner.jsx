import banner1 from '../../../assets/banner1.webp'
import banner2 from '../../../assets/banner2.webp'
import banner3 from '../../../assets/banner3.webp'
import banner4 from '../../../assets/banner4.webp'
import banner5 from '../../../assets/banner5.webp'
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css'
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    const images = [banner1, banner2, banner3, banner4, banner5]
    const pagination = {
        clickable: true,

    };
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation, Pagination]} pagination={pagination} className="mySwiper">

                {
                    images.map(image => <SwiperSlide >
                        <img className='h-auto' src={image} alt="" />
                    </SwiperSlide>)
                }

            </Swiper>

        </div >
    );
};

export default Banner;