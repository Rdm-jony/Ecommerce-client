import React, { useEffect, useRef, useState } from 'react';
import BtnLoader from '../../../Components/BtnLoader/BtnLoader';
import { useAddHomeBannerMutation, useGetCategoryImageMutation, useGetCategoryQuery, useGetHomeBannerByIdQuery, useGetSubCategoryBycategoryQuery } from '../../../Redux/api/baseApi';
import { IoImagesOutline } from 'react-icons/io5';
import AdminButton from '../../../Components/Admin/AdminButton/AdminButton';
import { TiDelete } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const AddBanner = () => {
    const { id } = useParams()
    const imageInputRef = useRef()
    const { data: bannerDetails, refetch } = useGetHomeBannerByIdQuery(id, { skip: !id })
    const [setBannerData, { isLoading }] = useAddHomeBannerMutation()
    const [setImage, { isLoading: imgLoader }] = useGetCategoryImageMutation()
    const { data: categories, isLoading: categoryLoading } = useGetCategoryQuery()
    const [currentCategory, setCurrentCategory] = useState('')
    const { data: subCategory } = useGetSubCategoryBycategoryQuery(currentCategory, { skip: !currentCategory })
    const [upLoadedImg, setUploadedImg] = useState('')
    const handlImageUpload = async (e) => {
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
        const categoryName = form.categoryName?.value.toLowerCase().trim();
        const subCategoryName = form.subCategoryName?.value.toLowerCase().trim();
        const bannerImg = upLoadedImg || bannerDetails?.bannerImg
        console.log(bannerImg)

        if (!categoryName || !bannerImg) {
            return toast.error('Please fill all the details!', { theme: "colored", })
        }
        let imgResult;
        if (bannerImg == bannerDetails?.bannerImg) {
            imgResult = { name: "singleImage", imageUrl: bannerDetails?.bannerImg }
        } else {
            const formData = new FormData()
            formData.append('singleImage', bannerImg)
            imgResult = await setImage(formData).unwrap()
        }

        if (imgResult?.name == "singleImage") {
            const newBanner = { categoryName, subCategoryName, bannerImg: imgResult.imageUrl }

            const data = await setBannerData({ newBanner, bannerId: bannerDetails?._id }).unwrap()
            if (data?.insertedId || data?.modifiedCount == 1) {
                toast.success(`banner successfully added in home`)
                form.reset()
                setUploadedImg('')
                setCurrentCategory('')
                refetch()
            } else {
                return toast.error(data?.error, { theme: "colored", })
            }
        } else {
            return toast.error('There was an image upload error!', { theme: "colored", })
        }

    }



    useEffect(() => {
        setCurrentCategory(bannerDetails?.categoryName)
    }, [bannerDetails])
    if (categoryLoading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div className='w-full'>
            <form onSubmit={handleSubmitForm}>
                <label className="form-control w-full `">
                    <div className="label">
                        <span className="label-text">CATEGORY</span>
                    </div>
                    <select name='categoryName' onChange={(e) => setCurrentCategory(e.target.value)} value={currentCategory} className="select select-bordered w-full dark:bg-gray-900">
                        <option value='' disabled selected>None</option>
                        {
                            categories?.map(cat => <option key={cat._id} value={cat?.categoryName}>{cat?.categoryName}</option>)
                        }
                    </select>
                    {
                        subCategory?.length > 0 && currentCategory && <label className="form-control w-full max-w-xs`">
                            <div className="label">
                                <span className="label-text">SUB CATEGORY</span>
                            </div>
                            <select name='subCategoryName' defaultValue={bannerDetails?.subCategoryName}
                                className="select select-bordered w-full dark:bg-gray-900">
                                {/* <option value='' disabled selected>None</option> */}
                                {
                                    subCategory?.map((option, idx) => <option key={idx} value={option}>{option}</option>)
                                }
                            </select>
                        </label>
                    }
                    <div>
                        <label for="username" class="block text-xl font-semibold text-black dark:text-gray-300 mb-5">Media And Published</label>
                        <div className="flex gap-5">
                            <div>

                                {
                                    (upLoadedImg || bannerDetails?.bannerImg) && <div className="w-40 h-40 relative p-5  border-dashed border-2 border-gray-300 rounded-xl">
                                        <img className="w-full h-full rounded-xl" src={upLoadedImg ? URL.createObjectURL(upLoadedImg) : bannerDetails?.bannerImg} alt="" />
                                        {
                                           upLoadedImg && <TiDelete onClick={() => {
                                                setUploadedImg('')
                                                imageInputRef.current.value = null
                                            }} className="absolute cursor-pointer -top-2 -right-2 text-2xl text-white bg-red-600 rounded-full" />
                                        }
                                    </div>
                                }
                            </div>
                            <div type='file' className={`file-input relative bg-gray-100 dark:bg-gray-900 w-40 h-40 dark:border-gray-600 text-gray-400 border-dashed  border-2 border-gray-300 rounded-xl flex flex-col justify-center  items-center`}>
                                <IoImagesOutline className="text-5xl" />
                                <p>image upload</p>
                                <input
                                    ref={imageInputRef}
                                    type="file"
                                    id="fileInput"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    accept="image/*"
                                    onChange={handlImageUpload}
                                />
                            </div>
                        </div>
                    </div>
                </label>
                <AdminButton loading={isLoading || imgLoader} ></AdminButton>
            </form>
        </div>
    );
};

export default AddBanner;