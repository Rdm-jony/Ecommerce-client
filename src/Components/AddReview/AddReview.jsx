import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const AddReview = () => {
    return (
        <div>
            <h2 className="font-semibold my-5">Add a review</h2>
            <textarea className="textarea textarea-bordered w-full h-24" placeholder="Write a review"></textarea>
            <Rating
                placeholderRating={1}
                emptySymbol={<FaRegStar className="text-gray-400" />
                }
                placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                fullSymbol={<FaStar className="text-[#FAAF00]" />}
            />
            <button className="btn bg-primary text-white text-xl block mt-10">Submit Review</button>
        </div>
    );
};

export default AddReview;