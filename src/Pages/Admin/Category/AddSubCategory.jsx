import React, { useEffect, useRef, useState } from 'react';
import AdminButton from '../../../Components/Admin/AdminButton/AdminButton';
import AdminBaredCrumb from '../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb';
import { FaHome } from 'react-icons/fa';
import { toast } from 'react-toastify';
import BtnLoader from '../../../Components/BtnLoader/BtnLoader';
import { useAddSubCategoryMutation, useGetCategoryQuery } from '../../../Redux/api/baseApi';

const AddSubCategory = () => {
    const [setSubCategory, { isLoading }] = useAddSubCategoryMutation()
    const { data: categories, isLoading: categoryLoading, refetch } = useGetCategoryQuery()

    useEffect(() => {
        refetch()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const categoryName = form.categoryName.value.toLowerCase()
        const subCategoryName = form.subCategoryName.value.toLowerCase()
        const newSubCategory = { categoryName, subCategoryName }
        if (!categoryName || !subCategoryName) {
            return toast.error('Please fill all the details!', { theme: "colored", })
        }
        const data = await setSubCategory(newSubCategory).unwrap()
        if (data?.modifiedCount > 0) {
            toast.success(`SuccessFully addded!`, { theme: "colored", })
            form.reset()
        } else if (data?.error) {
            return toast.error(data?.error, { theme: "colored", })

        }
    }


    if (categoryLoading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div className='w-full'>
            <AdminBaredCrumb title='Add Sub Category'>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full"> <FaHome className="mr-2"></FaHome> Dashboard</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Category</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Add sub Category</a></li>
            </AdminBaredCrumb>
            <form onSubmit={handleSubmit} className='space-y-6 px-3 py-5 rounded-xl dark:bg-dark drop-shadow-lg mt-10'>
                <select name='categoryName' className="select select-bordered w-full dark:bg-gray-900">
                    <option value='' disabled selected>None</option>
                    {
                        categories?.map(cat => <option key={cat._id} value={cat?.categoryName}>{cat?.categoryName}</option>)
                    }
                </select>
                <div>
                    <label for="username" class="block text-sm text-black dark:text-gray-300">Sub Category</label>
                    <input name='subCategoryName' type="text" class="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-400 bg-gray-50 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>
                <AdminButton loading={isLoading}></AdminButton>
            </form>
        </div>
    );
};

export default AddSubCategory;