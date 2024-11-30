import React from 'react';
import fashionImg from '../../assets/category/fashion.webp'
import electronicImg from '../../assets/category/electronics.webp'
import bagImg from '../../assets/category/bags.webp'
import footImg from '../../assets/category/footwear.webp'
import groceryImg from '../../assets/category/groceries.webp'
import beautyImg from '../../assets/category/beauty.webp'
import wellImg from '../../assets/category/wellness.webp'
import jwlleryImg from '../../assets/category/jwellery.webp'
import Slider from '@mui/material/Slider'
import { useState } from 'react'
import Rating from 'react-rating'
import { FaRegStar, FaStar } from 'react-icons/fa'
import asideBanner1 from '../../assets/asideBanner1.webp'
import asideBanner2 from '../../assets/asideBanner2.webp'

function valuetext(value) {
    return `${value}°C`;
}
const Sidebar = () => {
    const [value, setValue] = useState([0, 1000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const categoryImages = [
        {
            image: fashionImg,
            name: 'Fashion',
            bgColor: '#ECFFEC'
        },
        {
            image: electronicImg,
            name: 'Electronics',
            bgColor: '#FEEFEA'
        },
        {

            image: bagImg,
            name: 'Bags',
            bgColor: '#FDF0FF'
        },
        {
            image: footImg,
            name: 'Footwear',
            bgColor: '#DEF3FF'
        },
        {
            image: groceryImg,
            name: 'Groceries',
            bgColor: '#FFE8F8'
        },
        {
            image: beautyImg,
            name: "Beauty",
            bgColor: '#E3FFFA'
        },
        {
            image: wellImg,
            name: 'Wellness',
            bgColor: '#FFF3FF'
        },
        {
            image: jwlleryImg,
            name: "Jewellery",
            bgColor: '#D3FFD9'
        }
    ]
    return (
        <aside className="flex flex-col w-3/12  px-5 py-2  bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">

            <div className="flex flex-col justify-between   flex-1 mt-6  ">
                <div className='sticky top-20'>
                    <div className={`shadow-xl p-5 border-2 rounded-lg sticky`}>
                        <h2 className="font-semibold text-xl">Category</h2>
                        <div className="divider after::w-1/3 before:bg-primary before:w-2/3"></div>
                        <nav className="flex-1 -mx-3 space-y-3 max-h-60 overflow-auto">


                            {
                                categoryImages.map(cat => <a className="flex border-[1px] items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <img src={cat.image} className='w-8' alt="" />
                                    <span className="mx-2 text-sm font-medium">{cat.name}</span>
                                </a>)
                            }


                        </nav>
                    </div>
                    <div className='shadow-xl p-5 border-2 rounded-lg mt-10 sticky'>
                        <h2 className="font-semibold text-xl">Filter by price</h2>
                        <div className="divider after::w-1/3 before:bg-primary before:w-2/3"></div>
                        <Slider
                            min={0}
                            max={1000}
                            color='success'
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                        <div className='flex justify-between'>
                            <p className='font-semibold'>From: <span className='text-primary'>Rs: {value[0]}</span></p>
                            <p className='font-semibold'>To: <span className='text-primary'>Rs: {value[1]}</span></p>
                        </div>
                        <h2 className='font-semibold mt-8 mb-2'>Filter By Ratings</h2>
                        <div className='flex flex-col gap-2'>
                            <Rating
                                className='space-x-1'
                                placeholderRating={5.0}
                                emptySymbol={<FaRegStar className="text-gray-400" />
                                }
                                placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                                fullSymbol={<FaStar className="text-[#FAAF00]" />}
                            />
                            <Rating
                                className='space-x-1'
                                placeholderRating={4.0}
                                emptySymbol={<FaRegStar className="text-gray-400" />
                                }
                                placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                                fullSymbol={<FaStar className="text-[#FAAF00]" />}
                            />
                            <Rating
                                className='space-x-1'
                                placeholderRating={3.0}
                                emptySymbol={<FaRegStar className="text-gray-400" />
                                }
                                placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                                fullSymbol={<FaStar className="text-[#FAAF00]" />}
                            />
                            <Rating
                                className='space-x-1'
                                placeholderRating={2.0}
                                emptySymbol={<FaRegStar className="text-gray-400" />
                                }
                                placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                                fullSymbol={<FaStar className="text-[#FAAF00]" />}
                            />
                            <Rating
                                className='space-x-1'
                                placeholderRating={1.0}
                                emptySymbol={<FaRegStar className="text-gray-400" />
                                }
                                placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                                fullSymbol={<FaStar className="text-[#FAAF00]" />}
                            />
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