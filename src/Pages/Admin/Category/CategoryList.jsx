import { FaHome } from "react-icons/fa";
import AdminBaredCrumb from "../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb";
import BtnLoader from "../../../Components/BtnLoader/BtnLoader";
import CategoryTaleRow from "../../../Components/Admin/CategoryTableRow/CategoryTaleRow";
import { useGetCategoryQuery } from "../../../Redux/api/baseApi";
import { useEffect } from "react";

const CategoryList = () => {
    const { data: categories, isLoading, refetch } = useGetCategoryQuery()
    useEffect(() => {
        refetch()
    }, [])

    if (isLoading) {
        return <BtnLoader></BtnLoader>
    }


    return (
        <div className="w-full">
            <AdminBaredCrumb title='Category List' >
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full"> <FaHome className="mr-2"></FaHome> Dashboard</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Category</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Category List</a></li>
            </AdminBaredCrumb>
            <div>
                <table class="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr>
                            <th class="border border-slate-300 ..." >IMAGE</th>
                            <th class="border border-slate-300 ...">CATEGORY</th>
                            <th class="border border-slate-300 ...">COLOR</th>
                            <th class="border border-slate-300 ...">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories?.map((category, idx) => <CategoryTaleRow refetch={refetch} key={category._id} index={idx} category={category}></CategoryTaleRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryList;