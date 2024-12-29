import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import ReviewCard from "../AdditionalInfo/ReviewCard";
import AddReview from "../AddReview/AddReview";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { useLocation, useParams } from "react-router-dom";

const Reviews = () => {
    const { id } = useParams()
    const locaton = useLocation()
    return (
        <div className="w-3/5">
            <h2 className="font-semibold my-5">Customer questions & answers</h2>
            <div className="h-60 overflow-auto space-y-3">
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
            {
                location?.pathname == `/dashboard/products/${id}` || <AddReview></AddReview>


            }

        </div>
    );
};

export default Reviews;