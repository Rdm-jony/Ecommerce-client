import './Details.css'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { FaMinus, FaPlus, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { IoCartOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';

let index = 0;
const Details = () => {
    const [image, setImage] = useState('https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486841/1731486838744_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-0-202402111537.jpg')
    const [index, setIndex] = useState(0)
    const [size, setSize] = useState(null)
    let [count, setCount] = useState(1)
    const handleImage = (e, index) => {
        setImage(e.target.src)
        setIndex(index)
    }
    const handleIncrement = () => {
        count += 1
        setCount(count)
    }
    const handleDecrement = () => {
        if (count == 0) {
            return;
        }
        count -= 1
        setCount(count)
    }
    return (
        <div className="flex">
            <div className="w-1/2 flex flex-col items-center">
                <div className='w-2/3'>
                    <InnerImageZoom zoomType='hover' className='w-full rounded-lg h-[450px]' src={image} alt="" />
                </div>
                <div className='w-3/5'>
                    <Swiper
                        autoHeight={true}
                        slidesPerView={4}
                        // spaceBetween={30}

                        modules={[]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className={`w-20 h-20 border-2 p-1 ${index == 0 ? 'border-primary' : ''}`}>
                                <img className={`w-full`} onClick={(e) => handleImage(e, 0)} src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486841/1731486838744_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-0-202402111537.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`w-20 h-20 border-2 p-1 ${index == 1 ? 'border-primary' : ''}`}>
                                <img className='w-full' onClick={(e) => handleImage(e, 1)} src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486842/1731486838755_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-1-202402111537.webp" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`w-20 h-20 border-2 p-1 ${index == 2 ? 'border-primary' : ''}`}>
                                <img className='w-full' onClick={(e) => handleImage(e, 2)} src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486843/1731486838755_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-2-202402111537.jpg" alt="" />
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>
            </div>
            <div className='w-2/3 pr-20 space-y-6'>
                <h2 className='text-3xl font-semibold'>EYEBOGLER Teal Tshirts/Men tshirt/ tshirt for men/ tshirt/ mens tshirt/ Men's Polo Neck Regular Fit Half Sleeves Colorblocked T-Shirt</h2>
                <div className='flex gap-5 items-center'>
                    <Rating
                        placeholderRating={3.5}
                        emptySymbol={<FaRegStar className="text-gray-400" />
                        }
                        placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                        fullSymbol={<FaStar className="text-[#FAAF00]" />}
                    />
                    <p className='text-light text-2xl mb-2'>(1 reviews)</p>
                </div>
                <div className='flex gap-5 items-center'>
                    <p className='text-3xl font-semibold text-primary'>Rs 650</p>
                    <div>
                        <p className='text-xl font-semibold text-[#FAAF00]'>10% Off</p>
                        <p className='font-semibold text-light line-through'>Rs 950</p>
                    </div>
                </div>
                <p className='text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className='flex gap-3 items-center'>
                    <p>Size :</p>
                    <button onClick={() => setSize('S')} className={`btn  btn-sm btn-outline ${size == 'S' ? 'bg-primary text-white' : ''} hover:bg-primary`}>S</button>
                    <button onClick={() => setSize('M')} className={`btn btn-sm btn-outline ${size == 'M' ? 'bg-primary text-white' : ''} hover:bg-primary`}>M</button>
                    <button onClick={() => setSize('L')} className={`btn btn-sm btn-outline ${size == 'L' ? 'bg-primary text-white' : ''} hover:bg-primary`}>L</button>
                    <button onClick={() => setSize('XL')} className={`btn btn-sm btn-outline ${size == 'XL' ? 'bg-primary text-white' : ''} hover:bg-primary`}>XL</button>
                </div>
                <div className='flex gap-8'>
                    <div className='flex gap-5 items-center'>
                        <div onClick={handleDecrement} className='cursor-pointer bg-gray-200 w-12 h-12 flex justify-center items-center rounded-full'>
                            <FaMinus className='text-lg' />
                        </div>
                        <p className='text-2xl font-semibold'>{count}</p>
                        <div onClick={handleIncrement} className='cursor-pointer bg-gray-200 w-12 h-12  flex justify-center items-center rounded-full'>
                            <FaPlus className='text-lg' />
                        </div>
                    </div>
                    <button className='btn bg-primary text-white'><IoCartOutline className='text-lg' /> Add To Cart</button>
                    <button className='btn btn-outline'><FaRegHeart className='text-xl' /></button>
                </div>
            </div>
        </div>
    );
};

export default Details;