import React from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const SubCategoryTableRow = ({ category, index,refetch }) => {
    const axios=useAxiosPublic()
    const { categoryImg, categoryName, categoryColor, subCategory,_id } = category;
    const handleDelete = (sub) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const {data}=await axios.delete(`/category/subCategory/${_id}?sub=${sub}`)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: `${sub} has been deleted.`,
                        icon: "success"
                    });
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
                        subCategory.map((category, idx) => <div key={idx} className='bg-primary px-2 py-1 text-xs rounded-md text-white'><span className='mr-2 uppercase'>{category}</span><span onClick={()=>handleDelete(category)} className='cursor-pointer'>x</span></div>)
                    }
                </div>
            </td>
        </tr>
    );
};

export default SubCategoryTableRow;