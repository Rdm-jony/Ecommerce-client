import { FaMinus, FaPlus, FaRegStar, FaStar } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Rating from "react-rating";

const ProductCart = () => {
    return (
        <tr className="dark:bg-dark">
            <td>
                <div className={`w-20 h-20 border-2 p-1`}>
                    <img className={`w-full h-full`} src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731486841/1731486838744_eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-0-202402111537.jpg" alt="" />
                </div>
            </td>
            <td><div className="w-48">
                <p className="text-ellipsis font-semibold">GESPO Black & Teal Blue Colorblocked Round Neck.. </p>
                <Rating
                    placeholderRating={3.5}
                    emptySymbol={<FaRegStar className="text-gray-400" />
                    }
                    placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                    fullSymbol={<FaStar className="text-[#FAAF00]" />}
                />
            </div></td>
            <td className="text-lg font-semibold">Rs: 399</td>
            <td> <div className='flex gap-5 items-center'>
                <div className='cursor-pointer bg-gray-200 w-12 h-12 flex justify-center items-center rounded-full'>
                    <FaMinus />
                </div>
                <p className='text-2xl font-semibold'>1</p>
                <div className='cursor-pointer bg-gray-200 w-12 h-12  flex justify-center items-center rounded-full'>
                    <FaPlus />
                </div>
            </div></td>
            <td>            <td className="text-primary text-lg font-semibold">Rs: 399</td>
            </td>
            <td><MdDeleteOutline className="text-2xl" /></td>
        </tr>
    );
};

export default ProductCart;