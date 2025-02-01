import { SwiperSlide, Swiper } from 'swiper/react';
import featuredImg from '../../../assets/featured.webp'
import ProductsCard from '../../../Components/ProductsCard/ProductsCard';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useGetFeaturedProductsQuery } from '../../../Redux/api/baseApi';


const FeaturedProducts = () => {
    const { data: products } = useGetFeaturedProductsQuery()
    return (
        <div>
            <h2 className="text-3xl font-semibold my-5">Featured Products</h2>
            <div className='lg:flex'>
                <div className='lg:w-4/5'>
                    <Swiper
                        loop={true}
                        navigation={true}
                        spaceBetween={10}
                        breakpoints={{
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}

                        autoHeight={true}
                        modules={[Navigation]}
                        className="mySwiper w-full"
                    >
                        {
                            products?.map(product => <SwiperSlide key={product._id}><ProductsCard product={product}></ProductsCard></SwiperSlide>)
                        }



                    </Swiper>
                </div>
                <div className='lg:w-1/5'>
                    <img className='w-full h-full' src={featuredImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;