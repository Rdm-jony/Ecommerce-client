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
            <div className="flex gap-20">
                <h2 className="text-3xl font-semibold my-5">Popular Products</h2>
                <div className="flex justify-between flex-1 items-center">
                    {
                        categories?.map((cat, idx) => <li onClick={() => {
                            setIndex(idx)
                            setCurrentCategory(cat.categoryName)
                        }} key={cat._id} className={`${index == idx ? 'text-primary  border-b-2 border-primary' : ''} list-none uppercase cursor-pointer`}>{cat?.categoryName}</li>)
                    }
                </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {
                    popularProducts?.map(product=> <ProductsCard key={product._id} product={product}></ProductsCard>)
                }

            </div>
        </div>
    );
};

export default PopularProducts;