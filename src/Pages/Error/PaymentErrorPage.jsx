import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BKashErrorPage = () => {
    const { status } = useParams()
    const navigate=useNavigate()
    const handleGoCheckout = () => {
        // Redirect to the home page or a different route
        navigate('/checkout')
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
                <div className='text-white font-semibold capitalize bg-orange-600'>{status}</div>
                <h1 className="text-4xl font-extrabold text-red-600">Oops! Something Went Wrong</h1>
                <p className="mt-4 text-lg text-gray-700">
                    We're sorry, but there seems to be an issue with your bKash transaction.
                </p>
                <p className="mt-2 text-md text-gray-500">
                    Please try again later or contact customer support for further assistance.
                </p>
                <div className="mt-6">
                    <button
                        onClick={handleGoCheckout}
                        className="px-6 py-3 text-white bg-primary rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Go to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BKashErrorPage;
