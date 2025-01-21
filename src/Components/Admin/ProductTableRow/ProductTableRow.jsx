import React from 'react';
import { FaRegEye, FaRegStar, FaStar } from 'react-icons/fa';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { useDeleteProductsByIdMutation } from '../../../Redux/api/baseApi';
import Swal from 'sweetalert2';

const ProductTableRow = ({ product, index }) => {
    const [setDeleteProduct, { data }] = useDeleteProductsByIdMutation()
    const { productName, productCategory, productImage, price, oldPrice, brand, rating, subCategory, _id } = product;

    const handlDeleteProduct = () => {
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
                const result = await setDeleteProduct(_id).unwrap()
                if (result?.deletedCount == 1)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${productName} deleted succefully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
            }
        });
    }
    return (
        <tr className={`${index % 2 == 0 ? 'dark:bg-dark dark:bg-opacity-50' : 'bg-slate-50 dark:bg-dark'}`}>
            <td className="border border-slate-300 pl-5 h-20">
                <div className='p-2 w-16 h-16' >
                    <img className='w-full h-full' src={productImage[0]} alt="" />
                </div>
            </td>
            <td className='border border-slate-300 pl-5 w-52'>
                <p className="text-ellipsis font-semibold line-clamp-1">{productName} </p>
            </td>
            <td className="border border-slate-300 pl-5 capitalize">
                {productCategory}
            </td>
            <td className="border border-slate-300 pl-5 capitalize">
                {subCategory}
            </td >
            <td className="border border-slate-300 p-5 capitalize">
                <p className='bg-gray-600 text-center rounded-md text-white'>{brand}</p>
            </td>
            <td className="border border-slate-300 pl-5 text-sm capitalize">
                <p>Rs {price}</p>
                <p className='text-red-600 line-through'>Rs {oldPrice}</p>
            </td>
            <td className="border border-slate-300 pl-5">
                <Rating
                    className='!flex gap-1'
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar className="text-gray-400" />
                    }
                    placeholderSymbol={<FaStar className="text-[#FAAF00] dark:text-slate-50 " />}
                    fullSymbol={<FaStar className="text-[#FAAF00] dark:text-slate-50 " />}
                />
            </td>
            <td className='border pl-5'>
                <div className='flex gap-2'>
                    <Link to={`../products/${_id}`}>
                        <div className='w-7 h-7 rounded-sm cursor-pointer bg-[#d946ef] flex justify-center items-center'>
                            <FaRegEye className='text-white' />
                        </div>
                    </Link>
                    <Link to={`../product/update/${_id}`}>
                        <div className='w-7 h-7 rounded-sm cursor-pointer bg-primary flex justify-center items-center'>
                            <MdModeEditOutline className='text-white' />
                        </div>
                    </Link>

                    <div onClick={handlDeleteProduct} className='w-7 h-7 cursor-pointer rounded-sm bg-error flex justify-center items-center'>
                        <MdDelete className='text-white' />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ProductTableRow;