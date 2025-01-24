import React, { useEffect, useRef, useState } from 'react';
import CountingCard from '../../../Components/Admin/CountingCard/CountingCard';
import useGetDataPublic from '../../../Hooks/useGetDataPublic';
import BtnLoader from '../../../Components/BtnLoader/BtnLoader';
import { SiProducthunt } from 'react-icons/si';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { MdCategory } from 'react-icons/md';
import { useGetProductsQuery, useGetTotalProductsQuery } from '../../../Redux/api/baseApi';
import ProductTableRow from '../../../Components/Admin/ProductTableRow/ProductTableRow';

const ProductList = () => {
    const { data: total, isLoading: totalProductsLoading } = useGetTotalProductsQuery()
    const [categories, ,] = useGetDataPublic('category', '/category', [])
    const [currentCategory, setCurrentCategory] = useState('All')
    const { data: products, isLoading, refetch } = useGetProductsQuery(currentCategory)

    
    if (isLoading) {
        return <BtnLoader></BtnLoader>
    }
    console.log(currentCategory)
    return (
        <div className='w-full'>
            <div className='flex gap-8'>
                <CountingCard leftColor='#22c55e' RightColor='#86efac' title='Total Products' count={total?.toTalProduct} icon={<SiProducthunt className='text-5xl text-gray-400' />}></CountingCard>
                <CountingCard leftColor='#d946ef' RightColor='#e879f9' title='Total Categories' count={total?.totalCategory} icon={<BiSolidCategoryAlt className='text-5xl text-gray-400' />}></CountingCard>
                <CountingCard leftColor='#8b5cf6' RightColor='#a78bfa' title='Total Sub Category' count={total?.totalSubCategory} icon={<MdCategory className='text-5xl text-gray-400' />}></CountingCard>
            </div>
            <div>
                <h2 className='font-bold text-lg'>Best Selling Products
                </h2>
                <div className='flex justify-between items-center'>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">CATEGORY BY</span>
                        </div>
                        <select onChange={(e) => setCurrentCategory(e.target.value)} className="select select-bordered">
                            <option   value='All' selected>All</option>
                            {
                                categories?.map(cat => <option value={cat?.categoryName}>{cat?.categoryName}</option>)
                            }
                        </select>

                    </label>
                    <label className="input input-bordered flex items-center gap-2 self-end">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="text" className="grow" placeholder="Search here" />

                    </label>
                </div>
            </div>
            <table class="border-collapse border border-slate-400 w-full">
                <thead className='sticky top-0'>
                    <tr className='h-10 bg-primary text-white'>
                        <th class="border border-slate-300 ..." >PRODUCT</th>
                        <th class="border border-slate-300 ..." ></th>
                        <th class="border border-slate-300 ...">CATEGORY</th>
                        <th class="border border-slate-300 ...">SUB CATEGORY</th>
                        <th class="border border-slate-300 ...">BRAND</th>
                        <th class="border border-slate-300 ...">PRICE</th>
                        <th class="border border-slate-300 ...">RATING</th>
                        <th class="border border-slate-300 ...">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, idx) => <ProductTableRow key={product._id} index={idx} product={product}></ProductTableRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ProductList;