import { CiHeart } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "react-rating";

const ProductsCard = () => {

    return (
        <div className="card bg-base-100 dark:bg-dark group border-2 dark:border-gray-400 transition-all duration-600 hover:drop-shadow-xl hover:shadow-black ">
            <figure className="h-60 relative ">
                <img className="h-fit w-full group-hover:scale-110 transition-all duration-500"
                    src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423981/1731423977451_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"
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
                <p>Fashion</p>
                <h2 className="card-title text-lg text-ellipsis line-clamp-1">Siril Poly Silk White...</h2>
                <Rating
                    placeholderRating={3.5}
                    emptySymbol={<FaRegStar className="text-gray-400" />
                    }
                    placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                    fullSymbol={<FaStar className="text-[#FAAF00]" />}
                />
                <p className="text-sm">By <span className="text-primary">Tazo</span></p>
                <div className="flex ">
                    <p className="text-xl font-semibold text-primary">Rs 450</p>
                    <p className="text-xl font-medium text-gray-400 line-through">Rs 450</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;