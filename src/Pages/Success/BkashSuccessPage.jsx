import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BKashPaymentSuccessPage = () => {
    const location = useLocation();
    const navigate=useNavigate()
    // Assuming success data is passed via the URL query params
    const query = new URLSearchParams(location.search);
    console.log(query)
    const transactionId = query.get('transactionId');
    const amount = query.get('amount');
    const status = query.get('status') || 'Success'; 

    const handleGoProductOrder = () => {
        navigate('/product/order')
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
                <h1 className="text-4xl font-extrabold text-green-600">Payment Successful</h1>
                <div className="mt-4 text-lg text-gray-700">
                    <p>Your payment was successfully processed!</p>
                    <p className="mt-2">
                        <strong>Transaction ID:</strong> {transactionId}
                    </p>
                    <p className="mt-2">
                        <strong>Amount Paid:</strong> {amount} BDT
                    </p>
                    <p className="mt-2">
                        <strong>Status:</strong> {status}
                    </p>
                </div>
                <div className="mt-6">
                    <button 
                        onClick={handleGoProductOrder} 
                        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Go to product Oreder
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BKashPaymentSuccessPage;
