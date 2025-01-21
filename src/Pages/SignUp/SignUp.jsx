import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import google from '../../assets/Icon/google.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, signInGoogle } from '../../Redux/Features/authenticationSlice';
import { toast } from 'react-toastify';
import { useAddUserToDbMutation } from '../../Redux/api/baseApi';

const SignUp = () => {
    const navigate = useNavigate()
    const [setUserToDb] = useAddUserToDbMutation()
    const { error, status, name, email, phoneNumber } = useSelector((state) => state.authenticationSlice)
    const disPatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const password = watch('password');

    const onSubmit = async (data) => {
        const { email, password, name, phone } = data;
        disPatch(createUser({ email, password, name, phoneNumber: phone })).then(value => {
            if (value.meta.requestStatus == "fulfilled") {
                return toast.success("successfully Logged in!")
            }
            if (value.error) {
                return toast.error(value.error.message)
            }
        }).catch(er => {
            console.log(er)
            return toast.error(er)
        })

    }


    const handleGoogleSignIn = async () => {
        disPatch(signInGoogle()).then(value => {
            if (value.meta.requestStatus == "fulfilled") {
                return toast.success("successfully Logged in!")
            }
            if (value.error) {
                return toast.error(value.error.message)
            }
        }).catch(er => {
            console.log(er)
            return toast.error(er)
        })

    }
    return (
        <div>
            <div className='w-1/3 mx-auto'>
                <p className='text-3xl my-5'>SignUp</p>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <label className="input input-bordered flex items-center gap-2">
                        Full Name
                        <input {...register("name", { required: 'Name is required!' })} type="text" className="grow" />
                    </label>
                    {
                        errors.name && <p className='text-xs text-red-600'>{errors.name.message}</p>
                    }
                    <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input {...register("email", { required: 'Email is required!' })} type="email" className="grow" />
                    </label>
                    {
                        errors.email && <p className='text-xs text-red-600'>{errors.email.message}</p>
                    }
                    <label className="input input-bordered flex items-center gap-2">
                        Phone
                        <input {...register('phone', { required: 'Phone numver is required!', pattern: { value: /^01\d{9}$/, message: 'Phone number must start with 01' }, maxLength: { value: 11, message: 'Phone number must be 11 digits long' }, minLength: { value: 11, message: "Phone number must be 11 digits long" } })} type="number" className="grow" />
                    </label>
                    {
                        errors.phone && <p className='text-xs text-red-600'>{errors.phone.message}</p>

                    }
                    <label className="input input-bordered flex items-center gap-2">
                        Password
                        <input {...register('password', { required: 'password is required', pattern: { value: /^(?=.*[A-Z])(?=.*\d)/, message: 'Password must contain at least one uppercase letter and one digit' }, minLength: { value: 6, message: 'Password must be at least 6 characters long' } })} type="password" className="grow" />
                    </label>
                    {
                        errors.password && <p className='text-xs text-red-600'>{errors.password.message}</p>

                    }
                    <label className="input input-bordered flex items-center gap-2">
                        Confirm Password
                        <input {...register('confirmPassword', {
                            required: 'Confirm password is required!',
                            validate: (value) => value === password || 'Passwords do not match'
                        })} type="password" className="grow" />
                    </label>
                    {
                        errors.confirmPassword && <p className='text-xs text-red-600'>{errors.confirmPassword.message}</p>

                    }
                    <button className='btn bg-primary text-white w-full'>Sign Up</button>
                </form>
                <div className="divider">OR</div>
                <div onClick={handleGoogleSignIn} className='border-[1px] border-primary rounded-md cursor-pointer flex justify-center'>
                    <div className='flex gap-5 py-3'>
                        <img src={google} alt="" />
                        <p className='font-semibold'>Sign in with google</p>
                    </div>
                </div>
                <p className='text-sm text-center py-3'>Already have an account? <Link to="../signIn"><span className='text-primary font-semibold'>Sign In</span></Link></p>
            </div>
        </div>
    );
};

export default SignUp;