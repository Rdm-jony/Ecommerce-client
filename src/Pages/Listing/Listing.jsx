
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ListingTitle from '../../Components/ListingTitle/ListingTitle';
import { useGetListingProductsQuery } from '../../Redux/api/baseApi';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import BtnLoader from '../../Components/BtnLoader/BtnLoader';
import ProductsCard from '../../Components/ProductsCard/ProductsCard';


const Listing = () => {
    const location = useLocation()
    const { category, subCategory, priceRange, rating } = useSelector((state) => state.productListingSlice)
    const selectedCategory = category || location.state?.categoryName;

    const { data: listingProducts, refetch } = useGetListingProductsQuery({ category: selectedCategory, subCategory, priceRange, rating })
    console.log(category)
    return (
        <div>

            <ListingTitle></ListingTitle>
            <div className='flex mt-10'>
                <Sidebar></Sidebar>
                <div className='w-9/12 overflow-auto px-5'>
                    <p className='font-semibold py-5'>We found <span className='text-primary'>{listingProducts?.length}</span> items for you!</p>

                    <div className='grid grid-cols-3 gap-8'>
                        {
                            listingProducts?.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;