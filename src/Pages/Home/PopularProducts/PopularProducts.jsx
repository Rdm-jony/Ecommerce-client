import { NavLink, useNavigation } from "react-router-dom";
import ProductsCard from "../../../Components/ProductsCard/ProductsCard";
import { useGetCategoryQuery, useGetPopularProductsQuery } from "../../../Redux/api/baseApi";
import { useEffect, useState } from "react";
import BtnLoader from "../../../Components/BtnLoader/BtnLoader";

const PopularProducts = () => {
    const navigation = useNavigation()
    const { data: categories, isLoading: categoryLoading } = useGetCategoryQuery()
    const [currentCategory, setCurrentCategory] = useState(null)
    const [index, setIndex] = useState(0)
    const { data: popularProducts, refetch } = useGetPopularProductsQuery(currentCategory ? currentCategory : 'fashion')
    // useEffect(() => {
    //     refetch()
    // }, [categories])
    if (categoryLoading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div >
            <div className="flex lg:flex-row flex-col lg:gap-20 overflow-hidden">
                <h2 className="text-3xl font-semibold my-5">Popular Products</h2>
                <div className="flex overflow-x-auto gap-5 lg:gap-0 justify-between flex-1 items-center mb-10">
                    {
                        categories?.map((cat, idx) => <li onClick={() => {
                            setIndex(idx)
                            setCurrentCategory(cat.categoryName)
                        }} key={cat._id} className={`${index == idx ? 'text-primary  border-b-2 border-primary' : ''} list-none uppercase cursor-pointer`}>{cat?.categoryName}</li>)
                    }
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3">
                {
                    popularProducts?.map(product=> <ProductsCard key={product._id} product={product}></ProductsCard>)
                }

            </div>
        </div>
    );
};

export default PopularProducts;