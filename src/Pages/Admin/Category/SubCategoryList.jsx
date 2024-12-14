import React from 'react';
import { FaHome } from 'react-icons/fa';
import AdminBaredCrumb from '../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb';
import useGetDataPublic from '../../../Hooks/useGetDataPublic';
import BtnLoader from '../../../Components/BtnLoader/BtnLoader';
import SubCategoryTableRow from '../../../Components/Admin/SubCategoryTableRow/SubCategoryTableRow';

const SubCategoryList = () => {
    const [data, loading, refetch] = useGetDataPublic('subCategory', '/category/subCategory',[])
    if (loading) {
        return <BtnLoader></BtnLoader>
    }
    console.log(data)
    return (
        <div>
            <AdminBaredCrumb title='Category List'>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full"> <FaHome className="mr-2"></FaHome> Dashboard</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Category</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Sub Category</a></li>
            </AdminBaredCrumb>
            <div>
                <table class="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr>
                            <th class="border border-slate-300 ...">CATEGORY IMAGE</th>
                            <th class="border border-slate-300 ...">CATEGORY</th>
                            <th class="border border-slate-300 ...">SUB CATEGORY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((category,idx)=><SubCategoryTableRow category={category} refetch={refetch} index={idx} key={category._id}></SubCategoryTableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubCategoryList;