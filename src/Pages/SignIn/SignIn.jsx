import React from 'react';
import { useForm } from 'react-hook-form';
import google from '../../assets/Icon/google.png'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInGoogle, signInUser } from '../../Redux/Features/authenticationSlice';
import { toast } from 'react-toastify';

const SignIn = () => {
    const disPatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(data)
        disPatch(signInUser({ email, password })).then(value => {
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
                <p className='text-3xl my-5'>SignIn</p>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>

                    <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input {...register("email", { required: 'Email is required!' })} type="email" className="grow" />
                    </label>
                    {
                        errors.email && <p className='text-xs text-red-600'>{errors.email.message}</p>
                    }

                    <label className="input input-bordered flex items-center gap-2">
                        Password
                        <input {...register('password', { required: 'password is required' })} type="password" className="grow" />
                    </label>
                    {
                        errors.password && <p className='text-xs text-red-600'>{errors.password.message}</p>

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
                <p className='text-sm text-center py-3'>Do not have an account? <Link to="../signUp"><span className='text-primary font-semibold'>Sign Up</span></Link></p>
            </div>
        </div>
    );
};

export default SignIn;