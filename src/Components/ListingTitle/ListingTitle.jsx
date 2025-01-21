import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setSubCategory } from "../../Redux/Features/ProuctListingSlice";
import { useGetSubCategoryBycategoryQuery } from "../../Redux/api/baseApi";

const ListingTitle = () => {
    const location = useLocation()
    const { category } = useSelector((state) => state.productListingSlice)
    const { data: subCategory } = useGetSubCategoryBycategoryQuery(category ? category : location.state?.categoryName)
    const disPatch = useDispatch()
    console.log(location.state)
    console.log(category)
    return (
        <div className="bg-cyan-100 dark:bg-dark mt-5 p-5 px-10 rounded-xl">
            <h2 className="font-bold text-2xl mb-3 uppercase">{category ? category : location.state?.categoryName}</h2>
            <div className="space-x-3">
                <Link className="uppercase">Home</Link>
                {
                    subCategory?.map((sub, idx) => <Link key={idx} onClick={() => disPatch(setSubCategory(sub))} className="t uppercase">{sub}</Link>
                    )
                }
            </div>
        </div>
    );
};

export default ListingTitle;