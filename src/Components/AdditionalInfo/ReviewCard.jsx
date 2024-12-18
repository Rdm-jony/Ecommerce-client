import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ReviewCard = () => {
    return (
        <div className="flex justify-between border-2 p-5 rounded-xl">
            <div>
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-orange-500 text-2xl text-white">J</div>
                <p className="text-primary font-semibold">Jony Das</p>
            </div>
            <div>
                <p className="text-lg">2024-10-06</p>
                <p>good</p>
            </div>
            <Rating
                placeholderRating={3.5}
                emptySymbol={<FaRegStar className="text-gray-400" />
                }
                placeholderSymbol={<FaStar className="text-[#FAAF00]" />}
                fullSymbol={<FaStar className="text-[#FAAF00]" />}
            />
        </div>
    );
};

export default ReviewCard;