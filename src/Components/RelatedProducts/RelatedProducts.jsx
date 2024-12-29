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
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>

                </Swiper>
            </div>
        </div>

    );
};

export default RelatedProducts;