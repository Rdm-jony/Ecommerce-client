import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import ReviewCard from "../AdditionalInfo/ReviewCard";
import AddReview from "../AddReview/AddReview";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { Link, useLocation, useParams } from "react-router-dom";
import PrivateRoute from "../../Routes/PrivateRoute";
import { useSelector } from "react-redux";
import { useGetProductReviewsQuery } from "../../Redux/api/baseApi";

const Reviews = ({ productReviews }) => {
    const { id } = useParams()
    const { email } = useSelector((state) => state.authenticationSlice)
    const {data:productReview}=useGetProductReviewsQuery(id)
    console.log(productReview)
    return (
        <div className="lg:w-3/5 w-full">
            <h2 className="font-semibold my-5">Customer questions & answers</h2>
            <div className="h-60 overflow-auto space-y-3">
                {
                    productReview?.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }

            </div>
            {
                location?.pathname == `/dashboard/products/${id}` || email ? <AddReview></AddReview> : <p>Please signIn for add review <Link to="/signIn"><span className="text-primary font-semibold cursor-pointer">Sign In</span></Link></p>


            }

        </div>
    );
};

export default Reviews;