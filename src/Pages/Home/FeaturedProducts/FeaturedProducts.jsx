import { SwiperSlide, Swiper } from 'swiper/react';
import featuredImg from '../../../assets/featured.webp'
import ProductsCard from '../../../Components/ProductsCard/ProductsCard';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const FeaturedProducts = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold my-5">Featured Products</h2>
            <div className='flex'>
                <div className='w-4/5'>
                    <Swiper
                        loop={true}
                        navigation={true}
                        slidesPerView={4}
                        spaceBetween={10}

                        autoHeight={true}
                        modules={[Navigation]}
                        className="mySwiper w-full"
                    >
                        <SwiperSlide><ProductsCard></ProductsCard></SwiperSlide>
                        <SwiperSlide><ProductsCard></ProductsCard></SwiperSlide>
                        <SwiperSlide><ProductsCard></ProductsCard></SwiperSlide>
                        <SwiperSlide><ProductsCard></ProductsCard></SwiperSlide>
                        <SwiperSlide><ProductsCard></ProductsCard></SwiperSlide>
                        <SwiperSlide><ProductsCard></ProductsCard></SwiperSlide>

                    </Swiper>
                </div>
                <div className='w-1/5'>
                    <img className='w-full h-full' src={featuredImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;