import React, { useRef, useState } from 'react';
import { useGetCategoryImageMutation, useGetUserByEmailQuery, useUpdateUserMutation } from '../../Redux/api/baseApi';
import { useSelector } from 'react-redux';
import profileImg from '../../assets/avatar/profile.png'
import BtnLoader from '../../Components/BtnLoader/BtnLoader';
import { TiDelete } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
const EditProfile = () => {
    const imageInputRef = useRef()
    const [updateUser] = useUpdateUserMutation()
    const [setImage, { isLoading: imgLoader }] = useGetCategoryImageMutation()
    const [upLoadedImg, setUploadedImg] = useState('')
    const { email } = useSelector(state => state.authenticationSlice)
    const { data: profile, isLoading, refetch } = useGetUserByEmailQuery(email, { skip: !email })
    if (isLoading) {
        return <BtnLoader></BtnLoader>
    }
    console.log(upLoadedImg)
    const handlImageUpload = async (e) => {
        imageInputRef.current.value==null
        e.preventDefault()
        const file = e.target.files[0]
        if (!file) {
            return;
        }
        setUploadedImg(file)
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value.toLowerCase().trim();
        const email = form.email.value.toLowerCase().trim();
        const phoneNumber = form.phone.value.toLowerCase().trim();
        if (!name || !phoneNumber) {
            return toast.error('Please fill all the details!', { theme: "colored", })
        }
        let imgResult;
        if (upLoadedImg) {
            const formData = new FormData()
            formData.append('singleImage', upLoadedImg)
            imgResult = await setImage(formData).unwrap()
        }else{
            imgResult={name:"singleImage",imageUrl:profile?.image}
        }
        if (imgResult?.name == "singleImage") {
            const updateUserProfile = { name, email, phoneNumber, image: imgResult?.imageUrl }
            const data = await updateUser(updateUserProfile).unwrap()
            if (data?.matchedCount == 1) {
                updateProfile(auth.currentUser, {
                    displayName: name, phoneNumber: phoneNumber, photoURL: imgResult?.imageUrl
                }).then(() => {
                    refetch()
                    form.reset()
                    setUploadedImg('')
                    return toast.success(`successfully update user`)

                })

            } else {
                return toast.error(data?.error, { theme: "colored", })
            }
        } else {
            return toast.error('There was an image upload error!', { theme: "colored", })
        }

    }

    return (
        <div>
            <div className="avatar flex justify-center">

                {
                    <div type='file' className={` rounded-full p-0 file-input relative bg-gray-100 dark:bg-gray-900 w-40 h-40 dark:border-gray-600 text-gray-400 border-dashed  border-2 border-gray-300  flex flex-col justify-center  items-center`}>
                        {
                            upLoadedImg ? <img src={URL.createObjectURL(upLoadedImg)} className='cursor-pointer' alt="" /> : <img src={profile?.image ? profile?.image : profileImg} className='cursor-pointer' alt="" />


                        }
                        <input
                            ref={imageInputRef}
                            type="file"
                            id="fileInput"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            accept="image/*"
                            onChange={handlImageUpload}
                        />
                    </div>
                }
            </div>
            <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6" onSubmit={handleSubmitForm}>
                <h2 className="text-2xl font-semibold text-center text-gray-800">Profile Update</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="sm:col-span-1">
                        <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            defaultValue={profile?.name}
                            id="name"
                            name="name"
                            className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="sm:col-span-1">
                        <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            readOnly
                            defaultValue={profile?.email}
                            id="email"
                            name="email"
                            className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="sm:col-span-1">
                        <label for="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            defaultValue={profile?.phoneNumber}
                            className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className="col-span-3 sm:col-span-3">
                    <button
                        type="submit"
                        className={`btn btn-primary w-full py-3 px-6 rounded-md bg-primary text-white font-semibold text-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 ${(isLoading || imgLoader)?'cursor-not-allowed':'cursor-pointer'}`}
                    >
                        {
                            (isLoading || imgLoader)?<BtnLoader></BtnLoader>:'Save'
                        }
                    </button>
                </div>
            </form>

        </div>
    );
};

export default EditProfile;