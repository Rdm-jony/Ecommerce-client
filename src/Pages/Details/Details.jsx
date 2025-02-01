import './Details.css'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { FaMinus, FaPlus, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { IoCartOutline } from 'react-icons/io5';
import Description from '../../Components/Description/Description';
import AdditionalInfo from '../../Components/AdditionalInfo/AdditionalInfo';
import Reviews from '../../Components/Reviews/Reviews';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';
import { useAddToCartMutation, useGetProductsByIdQuery } from '../../Redux/api/baseApi';
import BtnLoader from '../../Components/BtnLoader/BtnLoader';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

let index = 0;
const Details = () => {
    const { email } = useSelector((state) => state.authenticationSlice)
    const [setCartInfo] = useAddToCartMutation()
    const { id } = useParams()
    const navigate=useNavigate()
    const location = useLocation()
    console.log(location)
    const { data: product, isLoading } = useGetProductsByIdQuery(id)
    const [image, setImage] = useState(null)
    const [index, setIndex] = useState(0)
    const [size, setSize] = useState(null)
    const [isActiveInfo, setIsActiveInfo] = useState(0)
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

    if (isLoading) {
        return <BtnLoader></BtnLoader>
    }
    const { productName, productCategory, productImage, discount, productDescription, price, productStock, oldPrice, locationCountry, rams, weight, brand, rating, subCategory, _id, productSize, productReviews, avgRating } = product;
    const additionInfo = { Category: productCategory, Brand: brand, Subcategory: subCategory, Rams: rams, Weight: weight, "Product Stock": productStock, "Available country": locationCountry.join(" , ") }
    const handleAddToCart = async () => {
        if(!email){
           return navigate("/signIn",{state:location.pathname})
        }
        if (!size) {
            return toast.error('please select product size!')
        }
        const cartInfo = { productImage: productImage[0], productName, price: parseFloat(price), avgRating: avgRating ? avgRating : rating, count, totalReview: productReviews.length, size, email, productId: _id }
        const result = await setCartInfo(cartInfo).unwrap()
        if (result.message) {
            return toast.error(result.message)
        }
        if (result.insertedId) {
            toast.success('success')
            setSize(null)
        }
    }
    return (
        <div>
            <div className='lg:flex dark:bg-dark'>
                <div className="flex lg:w-1/3 flex-col items-center p-5 ">

                    <InnerImageZoom zoomType='hover' className=' rounded-lg' src={image ? image : productImage[0]} alt="" />

                    <div className='w-full mt-5'>
                        <Swiper
                            autoHeight={true}
                            slidesPerView={3}
                            centeredSlides={true}
                            // spaceBetween={10}
                            modules={[]}
                            className="mySwiper w-full"
                        >
                            {
                                productImage?.map((img, idx) => <SwiperSlide>

                                    <div className={`w-20 h-20 border-2 p-1 ${index == idx ? 'border-primary' : ''}`}>
                                        <img className={`w-full`} onClick={(e) => handleImage(e, idx)} src={img} alt="" />
                                    </div>
                                </SwiperSlide>)
                            }


                        </Swiper>
                    </div>
                </div>
                <div className='lg:w-2/3 pr-20 space-y-6 p-5'>
                    <h2 className='text-3xl font-semibold capitalize'>{productName}</h2>
                    <div className='flex gap-5 items-center'>
                        <Rating
                            placeholderRating={avgRating ? avgRating : rating}
                            emptySymbol={<FaRegStar className="text-gray-400" />
                            }
                            placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                            fullSymbol={<FaStar className="text-[#FAAF00]" />}
                        />
                        <p className='text-light text-2xl mb-2'>({productReviews.length > 0 ? productReviews.length : 1})</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <p className='text-3xl font-semibold text-primary'>Rs {price}</p>
                        <div>
                            <p className='text-xl font-semibold text-[#FAAF00]'>{discount} Off</p>
                            <p className='font-semibold text-light line-through'>Rs {oldPrice}</p>
                        </div>
                    </div>
                    <p className='text-light'>{productDescription}</p>
                    {
                        productSize && <div className='flex gap-3 items-center'>
                            <p>Size :</p>
                            {
                                productSize?.map(sizeProd => <button onClick={() => setSize(sizeProd)} className={`btn  btn-sm btn-outline ${size == sizeProd ? 'bg-primary text-white' : ''} hover:bg-primary`}>{sizeProd}</button>)
                            }
                        </div>
                    }
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
                        <button className='btn bg-primary text-white' onClick={handleAddToCart}><IoCartOutline className='text-lg' /> Add To Cart</button>
                        <button className='btn btn-outline'><FaRegHeart className='text-xl' /></button>
                    </div>
                </div>
            </div>
            <div className='border-2 lg:p-16 my-10 dark:bg-dark'>
                
                <div className='flex lg:gap-20 gap-5'>
                    <button onClick={() => setIsActiveInfo(0)} className={`btn btn-outline hover:bg-gray-100 hover:text-black ${isActiveInfo == 0 ? 'text-primary' : ''}`}>Description</button>
                    <button onClick={() => setIsActiveInfo(1)} className={`btn btn-outline hover:bg-gray-100 hover:text-black ${isActiveInfo == 1 ? 'text-primary' : ''}`}>Addtional Info</button>
                    <button onClick={() => setIsActiveInfo(2)} className={`btn btn-outline hover:bg-gray-100 hover:text-black ${isActiveInfo == 2 ? 'text-primary' : ''}`}>Reviews(1)</button>
                </div>
                <div className='py-8 '>
                    {
                        isActiveInfo == 0 && <Description description={productDescription}></Description>
                    }
                    {
                        isActiveInfo == 1 && <AdditionalInfo additionInfo={additionInfo}></AdditionalInfo>
                    }
                    {
                        isActiveInfo == 2 && <Reviews productReviews={productReviews}></Reviews>
                    }
                </div>
            </div>
            {
                location?.pathname == `/dashboard/products/${id}` || <RelatedProducts category={productCategory} subCategory={subCategory}></RelatedProducts>

            }
        </div>
    );
};

export default Details;