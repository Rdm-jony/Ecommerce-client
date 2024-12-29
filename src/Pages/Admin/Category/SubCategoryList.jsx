import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import AdminBaredCrumb from '../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb';
import BtnLoader from '../../../Components/BtnLoader/BtnLoader';
import SubCategoryTableRow from '../../../Components/Admin/SubCategoryTableRow/SubCategoryTableRow';
import { useGetSubCategoryQuery } from '../../../Redux/api/baseApi';

const SubCategoryList = () => {
    const { data: subCategories, isLoading, refetch } = useGetSubCategoryQuery()

    useEffect(() => {
        refetch()
    }, [])

    if (isLoading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div className='w-full'>
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
                            subCategories?.map((category, idx) => <SubCategoryTableRow refetch={refetch} category={category} index={idx} key={category._id}></SubCategoryTableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubCategoryList;