import { CiHeart } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";

const ProductsCard = ({ product }) => {
    const navigate = useNavigate()
    const { productName, productCategory, productImage, price, oldPrice, brand, rating, _id } = product;

    return (
        <Link to={`/details/${_id}`}>
            <div className="card bg-base-100 dark:bg-dark group border-2 dark:border-gray-400 transition-all duration-600 hover:drop-shadow-xl hover:shadow-black ">
                <figure className="h-60 relative ">
                    <img className="h-fit w-full group-hover:scale-110 transition-all duration-500"
                        src={productImage[0]}
                        alt="Shoes" />

                    <div className="absolute  flex -z-10 group-hover:z-10 transition-all duration-500
                 justify-center items-center bg-black bg-opacity-40 w-full h-full">
                        <div className="flex absolute bg-white rounded-xl">
                            <div className="p-2">
                                <CiHeart className="text-primary" />
                            </div> <div className="divider m-0 before:bg-primary  after:bg-primary  divider-horizontal"></div> <div className="p-2">
                                <IoEyeOutline className="text-primary" />
                            </div>
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <p>{productCategory}</p>
                    <h2 className="card-title text-lg text-ellipsis line-clamp-1">{productName}</h2>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar className="text-gray-400" />
                        }
                        placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                        fullSymbol={<FaStar className="text-[#FAAF00]" />}
                    />
                    <p className="text-sm">By <span className="text-primary">{brand}</span></p>
                    <div className="flex ">
                        <p className="text-xl font-semibold text-primary">Rs {price}</p>
                        <p className="text-xl font-medium text-gray-400 line-through">Rs {oldPrice}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductsCard;