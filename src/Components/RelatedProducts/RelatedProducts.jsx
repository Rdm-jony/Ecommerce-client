import ProductsCard from "../ProductsCard/ProductsCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
const RelatedProducts = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold my-5">Popular Products</h2>

            <div>
                <Swiper
                    loop={true}
                    navigation={true}
                    slidesPerView={5}
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
        </div>

    );
};

export default RelatedProducts;