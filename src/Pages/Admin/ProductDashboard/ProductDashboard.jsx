import React from 'react';
import { useGetTotalProductsQuery } from '../../../Redux/api/baseApi';
import CountingCard from '../../../Components/Admin/CountingCard/CountingCard';
import { SiProducthunt } from 'react-icons/si';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { MdCategory } from 'react-icons/md';

const ProductDashboard = () => {
    const { data: total, isLoading: totalProductsLoading } = useGetTotalProductsQuery()

    return (
        <div>
            <div className='flex gap-8'>
                <CountingCard leftColor='#22c55e' RightColor='#86efac' title='Total Products' count={total?.toTalProduct} icon={<SiProducthunt className='text-5xl text-gray-400' />}></CountingCard>
                <CountingCard leftColor='#d946ef' RightColor='#e879f9' title='Total Categories' count={total?.totalCategory} icon={<BiSolidCategoryAlt className='text-5xl text-gray-400' />}></CountingCard>
                <CountingCard leftColor='#8b5cf6' RightColor='#a78bfa' title='Total Sub Category' count={total?.totalSubCategory} icon={<MdCategory className='text-5xl text-gray-400' />}></CountingCard>
                <CountingCard leftColor='#b58619' RightColor='#f2ad0c' title='Total Orders' count={total?.totalOrder} icon={<MdCategory className='text-5xl text-gray-400' />}></CountingCard>
            </div>
        </div>
    );
};

export default ProductDashboard;