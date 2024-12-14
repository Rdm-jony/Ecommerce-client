import React, { useState } from 'react';
import useGetDataPublic from '../../../Hooks/useGetDataPublic';
import AdminButton from '../../../Components/Admin/AdminButton/AdminButton';
import AdminBaredCrumb from '../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb';
import { FaHome } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import BtnLoader from '../../../Components/BtnLoader/BtnLoader';

const AddSubCategory = () => {
    const axios = useAxiosPublic()
    const [data, loading, refetch] = useGetDataPublic('category', '/category', [])
    const [btnLoading, setBtnLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const categoryName = form.categoryName.value.toLowerCase()
        const subCategoryName = form.subCategoryName.value.toLowerCase()
        const newSubCategory = { categoryName, subCategoryName }
        console.log(newSubCategory)
        if (!categoryName || !subCategoryName) {
            return toast.error('Please fill all the details!', { theme: "colored", })
        }
        setBtnLoading(true)
        const { data } = await axios.post(`/category/subCategory`, newSubCategory)
        console.log(data)
        if (data.modifiedCount > 0) {
            setBtnLoading(false)
            form.reset()
        }
        else if (data?.message) {
            setBtnLoading(false)
            return toast.error(data?.message, { theme: "colored", })

        }
        else {
            setBtnLoading(false)
        }

    }

    if (loading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div>
            <AdminBaredCrumb title='Add Sub Category'>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full"> <FaHome className="mr-2"></FaHome> Dashboard</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Category</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Add sub Category</a></li>
            </AdminBaredCrumb>
            <form onSubmit={handleSubmit} className='space-y-6 px-3 py-5 rounded-xl dark:bg-dark drop-shadow-lg mt-10'>
                <select name='categoryName' className="select select-bordered w-full dark:bg-gray-900">
                    <option value='' disabled selected>None</option>
                    {
                        data?.map(option => <option key={option._id} value={option?.categoryName}>{option?.categoryName}</option>)
                    }
                </select>
                <div>
                    <label for="username" class="block text-sm text-black dark:text-gray-300">Sub Category</label>
                    <input name='subCategoryName' type="text" class="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-400 bg-gray-50 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>
                <AdminButton loading={btnLoading}></AdminButton>
            </form>
        </div>
    );
};

export default AddSubCategory;