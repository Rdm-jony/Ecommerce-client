import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDeleteSubCategoryMutation } from '../../../Redux/api/baseApi';
import { toast } from 'react-toastify';

const SubCategoryTableRow = ({ category, index, refetch }) => {
    const [deleteSubCategory] = useDeleteSubCategoryMutation()
    const { categoryImg, categoryName, categoryColor, subCategory, _id } = category;
    const handleDelete = (sub) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const data = await deleteSubCategory({ _id, subCategory: sub }).unwrap()
                if (data?.modifiedCount > 0) {
                    toast.success(`${sub} deleted from category ${categoryName}`)
                    refetch()
                }
            }

        });
    }


    return (
        <tr className={`${index % 2 == 0 ? 'dark:bg-dark dark:bg-opacity-50' : 'bg-slate-50 dark:bg-dark'}`}>
            <td class="border border-slate-300 pl-5 w-3/12">
                <div className='p-2 w-14 h-14' style={{ backgroundColor: categoryColor }}>
                    <img src={categoryImg} alt="" />
                </div>
            </td>
            <td class="border border-slate-300 uppercase pl-5 w-3/12">{categoryName}</td>
            <td className='border border-slate-300'>
                <div className='flex gap-5'>
                    {
                        subCategory.map((sub, idx) => <div key={idx} className='bg-primary px-2 py-1 text-xs rounded-md text-white'><span className='mr-2 uppercase'>{sub}</span><span onClick={() => handleDelete(sub)} className='cursor-pointer'>x</span></div>)
                    }
                </div>
            </td>
        </tr>
    );
};

export default SubCategoryTableRow;