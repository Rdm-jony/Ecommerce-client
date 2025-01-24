import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLocation, useParams } from 'react-router-dom';

const ReviewCard = ({ review }) => {
    return (
        <div className="flex justify-between items-center border-2 border-gray-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-orange-500 text-2xl text-white font-bold uppercase">
                    {review?.email[0]}
                </div>
                <div>
                    <p className="text-lg font-semibold text-gray-800">{review?.name}</p>
                    <p className="text-sm text-gray-500">{review?.date}</p>
                </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
                <p className="text-sm text-gray-500">{review.description}</p>
                <Rating
                    readonly
                    placeholderRating={review?.rating}
                    emptySymbol={<FaRegStar className="text-gray-400" />}
                    placeholderSymbol={<FaStar className="text-yellow-400" />}
                    fullSymbol={<FaStar className="text-yellow-400" />}
                />
            </div>
        </div>

    );
};

export default ReviewCard;