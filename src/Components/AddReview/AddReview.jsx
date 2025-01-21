import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddProductReviewMutation } from "../../Redux/api/baseApi";
import { format } from "date-fns";

const AddReview = () => {
    const { email, name } = useSelector((state) => state.authenticationSlice)
    const [setRatingInfo] = useAddProductReviewMutation()
    const { id } = useParams()
    const [value, stValue] = useState()
    const handleSubmitReview = async (e) => {
        e.preventDefault()
        const description = e.target.description.value;
        const rating = value;
        const date = format(new Date(), "MM/dd/yyyy");
        const ratingInfo = { rating, description, productId: id, email, name, date }
        if (!description) {
            return toast.error('Descripition is required!')
        } else if (!rating) {
            return toast.error('Racting is required!')

        } else {
            const result = await setRatingInfo(ratingInfo).unwrap()
            if (result.acknowledged) {
                e.target.reset()
                return toast.success('succesFully added review!')
            }
        }

    }
    return (
        <form onSubmit={handleSubmitReview}>
            <h2 className="font-semibold my-5">Add a review</h2>
            <textarea name="description" className="textarea textarea-bordered w-full h-24" placeholder="Write a review"></textarea>
            <Rating
                onChange={(v) => stValue(v)}
                placeholderRating={1}
                emptySymbol={<FaRegStar className="text-gray-400" />
                }
                placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                fullSymbol={<FaStar className="text-[#FAAF00]" />}
            />
            <button className="btn bg-primary text-white text-xl block mt-10" type="submit" >Submit Review</button>
        </form>
    );
};

export default AddReview;