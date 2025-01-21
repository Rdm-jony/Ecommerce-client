import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLocation, useParams } from 'react-router-dom';

const ReviewCard = ({ review }) => {
    console.log(review)
    return (
        <div className="flex justify-between border-2 p-5 rounded-xl">
            <div>
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-orange-500 text-2xl text-white uppercase">{review?.email[0]}</div>
                <p className="text-primary font-semibold">{review?.name}</p>
            </div>
            <div>
                <p className="text-lg">{review?.date}</p>
                <p>good</p>
            </div>
            <Rating
                readonly
                placeholderRating={review?.rating}
                emptySymbol={<FaRegStar className="text-gray-400" />
                }
                placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                fullSymbol={<FaStar className="text-[#FAAF00]" />}
            />
        </div>
    );
};

export default ReviewCard;