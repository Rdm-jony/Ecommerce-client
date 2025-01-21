import React, { useRef } from 'react';

import Slider from '@mui/material/Slider'
import Rating from 'react-rating'
import { FaRegStar, FaStar } from 'react-icons/fa'
import asideBanner1 from '../../assets/asideBanner1.webp'
import asideBanner2 from '../../assets/asideBanner2.webp'
import { setCategory, setPriceRange, setRating, setSubCategory } from '../../Redux/Features/ProuctListingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCategoryQuery } from '../../Redux/api/baseApi';
import { Box } from '@mui/material';


function valuetext(value) {
    return `${value}°C`;
}

const Sidebar = () => {
    const disPatch = useDispatch()
    const { priceRange, category } = useSelector((state) => state.productListingSlice)
    const { data: categories } = useGetCategoryQuery()
    const handleChange = (event, newValue) => {
        disPatch(setPriceRange(newValue))
    };

    return (
        <aside className="flex flex-col w-3/12  px-5 py-2  bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">

            <div className="flex flex-col justify-between   flex-1 mt-6  ">
                <div className='sticky top-20 '>
                    <div className={`shadow-xl p-5 border-2 rounded-lg dark:bg-dark`}>
                        <h2 className="font-semibold text-xl">Category</h2>
                        <div className="divider after::w-1/3 before:bg-primary before:w-2/3"></div>
                        <nav className="flex-1 -mx-3 space-y-3 max-h-60 overflow-auto">
                            {
                                categories?.map(cat => <div key={cat._id} onClick={() => {
                                    disPatch(setCategory(cat?.categoryName))
                                    disPatch(setSubCategory(""))
                                }} className={`${category == cat.categoryName ? 'border-primary' : ''} flex border-[1px] cursor-pointer items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`} href="#">
                                    <img src={cat?.categoryImg} className='w-8' alt="" />
                                    <span className="mx-2 text-sm font-medium uppercase">{cat?.categoryName}</span>
                                </div>)
                            }
                        </nav>
                    </div>
                    <div className='shadow-xl p-5 border-2 dark:bg-dark rounded-lg mt-10 sticky'>
                        <h2 className="font-semibold text-xl">Filter by price</h2>
                        <div className="divider after::w-1/3 before:bg-primary before:w-2/3"></div>
                        <Box className="w-full">
                            <Slider
                                sx={{ color: "#16a34a" }}
                                min={0}
                                max={80000}
                                getAriaLabel={() => 'Temperature range'}
                                value={priceRange}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Box>                  <div className='flex justify-between'>
                            <p className='font-semibold'>From: <span className='text-primary'>Rs: {priceRange[0]}</span></p>
                            <p className='font-semibold'>To: <span className='text-primary'>Rs: {priceRange[1]}</span></p>
                        </div>
                        <h2 className='font-semibold mt-8 mb-2'>Filter By Ratings</h2>
                        <div className='flex flex-col gap-2'>
                            {
                                [5, 4, 3, 2, 1].map((rat, idx) => <div onClick={() => disPatch(setRating(rat))}
                                    key={idx}
                                >
                                    <Rating
                                        readonly
                                        className='space-x-1 cursor-pointer'
                                        placeholderRating={rat}
                                        emptySymbol={<FaRegStar className="text-gray-400" />
                                        }
                                        placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                                        fullSymbol={<FaStar className="text-[#FAAF00]" />}
                                    />
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white">New feature availabel!</h2>

                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

                            <img className="object-cover w-full  mt-2 rounded-lg" src={asideBanner1} alt="" />
                            <img className="object-cover w-full  mt-2 rounded-lg" src={asideBanner2} alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;