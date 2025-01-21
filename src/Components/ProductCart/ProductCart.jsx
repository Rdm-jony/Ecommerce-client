import { useState } from "react";
import { FaMinus, FaPlus, FaRegStar, FaStar } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { useProductCartDeleteMutation, useUpdateProductCartMutation } from "../../Redux/api/baseApi";

const ProductCart = ({ cart }) => {
    const [deleteProductCart] = useProductCartDeleteMutation()
    const [updateProductCart] = useUpdateProductCartMutation()
    const { avgRating, count, email, price, productImage, productName, size, totalReview, _id } = cart


    const handleDecrement = async () => {
        if (count == 1) {
            return;
        }
        console.log(count - 1)
        const { result } = await updateProductCart({ id: _id, count: count - 1 }).unwrap()

    }

    const handleIncrement = async () => {
        console.log(count - 1)
        const { result } = await updateProductCart({ id: _id, count: count + 1 }).unwrap()


    }

    const handleDeleteCart = () => {
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
                console.log(_id)
                const result = await deleteProductCart(_id).unwrap()
                if (result.deletedCount == 1) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully deletedCart",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }

            }
        });
    }
    return (
        <tr className="dark:bg-dark">
            <td>
                <div className={`w-20 h-20 border-2 p-1`}>
                    <img className={`w-full h-full`} src={productImage} alt="" />
                </div>
            </td>
            <td><div className="w-48">
                <p className="text-ellipsis font-semibold line-clamp-1">{productName} </p>
                <Rating
                    placeholderRating={avgRating}
                    emptySymbol={<FaRegStar className="text-gray-400" />
                    }
                    placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                    fullSymbol={<FaStar className="text-[#FAAF00]" />}
                />
            </div></td>
            <td className="text-lg font-semibold">{price}</td>
            <td> <div className='flex gap-5 items-center'>
                <div onClick={handleDecrement} className='cursor-pointer bg-gray-200 w-12 h-12 flex justify-center items-center rounded-full'>
                    <FaMinus />
                </div>
                <p className='text-2xl font-semibold'>{count}</p>
                <div onClick={handleIncrement} className='cursor-pointer bg-gray-200 w-12 h-12  flex justify-center items-center rounded-full'>
                    <FaPlus />
                </div>
            </div></td>
            <td>            <td className="text-primary text-lg font-semibold">{price * count}</td>
            </td>
            <td><MdDeleteOutline onClick={handleDeleteCart} className="text-2xl" /></td>
        </tr>
    );
};

export default ProductCart;