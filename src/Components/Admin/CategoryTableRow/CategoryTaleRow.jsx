import React from 'react';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useDeleteCategoryMutation } from '../../../Redux/api/baseApi';
import { toast } from 'react-toastify';


const CategoryTaleRow = ({ category, index, refetch }) => {
    const [deleteCategory] = useDeleteCategoryMutation()
    const { categoryName, categoryColor, categoryImg, _id } = category;
    const handleDelete = () => {
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
                const data = await deleteCategory(_id).unwrap()
                if (data?.deletedCount == 1) {
                    toast.success(`${categoryName} successFully deleted!`)
                    refetch()
                }
            }

        });
    }
    return (
        <tr className={`${index % 2 == 0 ? 'dark:bg-dark dark:bg-opacity-50' : 'bg-slate-50 dark:bg-dark'}`}>
            <td class="border border-slate-300 pl-5">
                <div className='p-2 w-14 h-14' style={{ backgroundColor: categoryColor }}>
                    <img src={categoryImg} alt="" />
                </div>
            </td>
            <td class="border border-slate-300 uppercase pl-5">{categoryName}</td>
            <td class="border border-slate-300 pl-5">{categoryColor}</td>
            <td className='border pl-5'>
                <div className='flex gap-2'>
                    <Link to={`../category/edit/${_id}`}>
                        <div className='w-7 h-7 rounded-sm cursor-pointer bg-primary flex justify-center items-center'>
                            <MdModeEditOutline className='text-white' />
                        </div>
                    </Link>
                    <div onClick={handleDelete} className='w-7 h-7 cursor-pointer rounded-sm bg-error flex justify-center items-center'>
                        <MdDelete className='text-white' />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default CategoryTaleRow;