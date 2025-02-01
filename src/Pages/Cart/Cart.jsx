import { FaArrowLeft } from "react-icons/fa";
import ProductCart from "../../Components/ProductCart/ProductCart";
import { useGetAllCartsQuery } from "../../Redux/api/baseApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnLoader from "../../Components/BtnLoader/BtnLoader";
import { useSelector } from "react-redux";

const Cart = () => {
    const { email } = useSelector((state) => state.authenticationSlice)
    console.log(email)
    const { data: carts, refetch, isLoading } = useGetAllCartsQuery(email)
    if (isLoading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Shop</a></li>
                    <li><a>Cart</a></li>
                </ul>
            </div>
            <hr />
            <div className="lg:flex">
                <div className="lg:w-2/3">
                    <div className="my-10">
                        <h2 className="font-semibold text-xl">Your Cart</h2>
                        <p>There are <span className="text-primary font-semibold">{carts?.length}</span> products in your cart

                        </p>
                    </div>
                    <div className="overflow-x-auto ">
                        <table className="table">
                            <thead>
                                <tr className="bg-base-200">
                                    <th>Product</th>
                                    <th></th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    carts?.result?.map(cart => <ProductCart key={cart._id}  cart={cart}></ProductCart>)
                                }


                            </tbody>
                        </table>
                    </div>
                    <button className="btn bg-primary text-white mt-10"><FaArrowLeft></FaArrowLeft> Continue Shooping</button>
                </div>
                <div className="lg:w-1/3 p-10">
                    <div className="p-5 border-2 dark:border-gray-400 bg-gray-100 dark:bg-dark rounded-xl space-y-4 sticky top-24">
                        <div className="flex justify-between">
                            <p className="font-semibold text-light">Subtotal</p>
                            <p className="font-semibold text-primary text-xl">₹{carts?.totalAmount}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-light">Shipping</p>
                            <p className="font-semibold  text-xl">Free</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-light">Estimate for
                            </p>
                            <p className="font-semibold  text-xl">United Kingdom</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-light">Total
                            </p>
                            <p className="font-semibold text-primary text-xl">₹{carts?.totalAmount}</p>
                        </div>
                        <Link to='/checkOut'> <button className="btn  bg-primary text-white text-lg">Procced To Checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;