import React from 'react';
import { useCreateBkashPaymentMutation, useGetAllCartsQuery } from '../../Redux/api/baseApi';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import BtnLoader from '../../Components/BtnLoader/BtnLoader';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { email } = useSelector((state) => state.authenticationSlice)
    const [setPaymentInfo] = useCreateBkashPaymentMutation()
    const { data: carts, isLoading } = useGetAllCartsQuery(email)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        const userInfo = data
        const productInfo = carts
        const paymentInfo = { userInfo, productInfo }
        try {
            const result = await setPaymentInfo(paymentInfo).unwrap()
            console.log(result)
            if (result?.bkashURL) {
                window.location.href = result?.bkashURL

            }

        } catch (error) {
            console.log(error)
        }
    }
    if (!email) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <form className='lg:flex gap-8' onSubmit={handleSubmit(onSubmit)}>
            <div className='lg:w-2/3'>
                <h2 className='font-semibold py-5 text-2xl'>BILLING DETAILS</h2>
                <div className='space-y-4'>
                    <div className='flex gap-8'>
                        <label className="form-control w-full">
                            <input  {...register('fullName', { required: 'Full Name is required' })} type="text" placeholder="Full Name" className="input input-bordered w-full" />
                            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}

                        </label>
                        <label className="form-control w-full ">
                            <input {...register('countryName', { required: 'Country Name is required' })} type="text" placeholder="Country *" className="input input-bordered w-full" />
                            {errors.countryName && <p className="text-red-500 text-xs">{errors.countryName.message}</p>}
                        </label>
                    </div>

                    <label className="form-control w-full ">
                        <span className="label-text">Street address *</span>
                        <input {...register('streetAddress', { required: 'Street Address is required' })} type="text" placeholder="House number and street name" className="input input-bordered w-full " />
                        {errors.streetAddress && <p className="text-red-500 text-xs">{errors.streetAddress.message}</p>}

                    </label>
                    <label className="form-control w-full">
                        <input {...register('apartment')} type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="input input-bordered w-full " />
                    </label>
                    <h2></h2>
                    <label className="form-control w-full ">
                        <span className="label-text">Town / City *</span>
                        <input {...register('city', { required: 'City Name is required' })} type="text" placeholder="City" className="input input-bordered w-full" />
                        {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}

                    </label>
                    <label className="form-control w-full ">
                        <span className="label-text">State / County *</span>
                        <input {...register('state', { required: 'State Name is required' })} type="text" placeholder="State" className="input input-bordered w-full" />
                        {errors.state && <p className="text-red-500 text-xs">{errors.state.message}</p>}

                    </label>
                    <label className="form-control w-full ">
                        <span className="label-text">Postcode / ZIP *</span>
                        <input {...register('postCode', { required: 'postcode is required' })} type="text" placeholder="ZIP code" className="input input-bordered w-full" />
                        {errors.postCode && <p className="text-red-500 text-xs">{errors.postCode.message}</p>}

                    </label>
                    <div className='flex gap-8'>
                        <label className="form-control w-full ">
                            <input {...register('phoneNumber', { required: 'Phone Number is required' })} type="text" placeholder="Phone Number *" className="input input-bordered w-full " />
                            {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>}

                        </label>
                        <label className="form-control w-full">
                            <input {...register('email')} type="text" value={email} readOnly placeholder="Email Address *" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/3 mt-5'>
                <div className='bg-gray-100 p-5 rounded-md sticky top-20'>
                    <h2 className='font-semibold text-xl'>YOUR ORDER</h2>
                    <hr />
                    <div className='flex justify-between font-semibold py-2'>
                        <p>Product</p>
                        <p>Subtotal</p>
                    </div>
                    <hr />
                    <div className='space-y-4 pt-5'>
                        {
                            carts?.result?.map(cart => <div key={cart._id} className='flex justify-between'>
                                <p><span className=''>{cart.productName.length > 50 ? `${cart.productName.substring(0, 30)}...` : cart.productName}</span> x {cart.count}</p>
                                <p>{cart?.count * cart.price}</p>
                            </div>)
                        }
                    </div>
                    <div className='flex justify-between font-semibold py-2'>
                        <p>Subtotal</p>
                        <p>{carts?.totalAmount}</p>
                    </div>
                    <button className='btn bg-primary w-full text-white btn-sm '>Checkout</button>
                </div>
            </div>
        </form>
    );
};

export default Checkout;