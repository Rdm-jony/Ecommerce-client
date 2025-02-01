import ProductsCard from "../ProductsCard/ProductsCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import { useGetRelatedProductsQuery } from "../../Redux/api/baseApi";

const RelatedProducts = ({ subCategory, category }) => {
    console.log(subCategory, category)
    const { data: products } = useGetRelatedProductsQuery({ category, subCategory })
    console.log(products)
    return (
        <div>
            <h2 className="text-3xl font-semibold my-5">Related Products</h2>

            <div>
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
        </div>

    );
};

export default RelatedProducts;