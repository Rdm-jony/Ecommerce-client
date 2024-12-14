import { IoImagesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import ImgLoader from "../Component/ImgLoader";
import { TiDelete } from "react-icons/ti";
import imageUpload from "../../../Utilities/utilities";
import AdminButton from "../../../Components/Admin/AdminButton/AdminButton";
import AdminBaredCrumb from "../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb";
import { FaHome } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from "axios";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useGetDataPublic from "../../../Hooks/useGetDataPublic";
import BtnLoader from "../../../Components/BtnLoader/BtnLoader";



const EditCategory = () => {
    const { id } = useParams()
    const axios = useAxiosPublic()

    const [data, loading, refetch] = useGetDataPublic('categoryById', `/category/edit/${id}`, [id])
    useEffect(() => {
        if (data && data.categoryImg) {
            setUploadedImg(data.categoryImg);
        }
    }, [data]);

    const [upLoadedImg, setUploadedImg] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const [imgLoader, setImgLoader] = useState(false)

    const handlImageUpload = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        if (!file) {
            return;
        }
        const formData = new FormData()
        formData.append('image', file)
        setImgLoader(true)
        const imgUrl = await imageUpload(formData)
        setUploadedImg(imgUrl)
        setImgLoader(false)

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const categoryName = form.categoryName.value.toLowerCase();
        const categoryColor = form.categoryColor.value.toLowerCase();
        const categoryImg = upLoadedImg
        if (!categoryName || !categoryColor || !categoryImg) {
            return toast.error('Please fill all the details!', { theme: "colored", })
        }
        const newCategory = { categoryName, categoryColor, categoryImg }
        setBtnLoading(true)
        const { data: getdata } = await axios.patch(`/category/edit/${data?._id}`, newCategory)

        if (getdata.modifiedCount > 0) {
            toast.success(`${categoryName} is successfully Update!`)
            setBtnLoading(false)
            form.reset()
            setUploadedImg('')
            refetch()
        } else {
            setBtnLoading(false)

        }
    }


    if (loading) {
        return <BtnLoader></BtnLoader>
    }


    return (
        <div>
            <AdminBaredCrumb title='Edit Category'>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full"> <FaHome className="mr-2"></FaHome> Dashboard</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Category</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Edit Category</a></li>
            </AdminBaredCrumb>
            <form onSubmit={handleSubmit} className="space-y-6  px-3 py-5 rounded-xl dark:bg-dark drop-shadow-lg mt-10">
                <div>
                    <label for="username" class="block text-sm text-black dark:text-gray-300">Category Name</label>

                    <input type="text" defaultValue={data?.categoryName} name="categoryName" class="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-400 bg-gray-50 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>
                <div>
                    <label for="username" class="block text-sm text-black dark:text-gray-300">Color</label>

                    <input type="text" defaultValue={data?.categoryColor} name="categoryColor" class="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-400 bg-gray-50 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div>
                    <label for="username" class="block text-xl font-semibold text-black dark:text-gray-300 mb-5">Media And Published</label>
                    <div className="flex gap-5">
                        <div>
                            {
                                upLoadedImg && <div className="w-40 h-40 relative p-5  border-dashed border-2 border-gray-300 rounded-xl">
                                    <img className="w-full h-full rounded-xl" src={upLoadedImg} alt="" />
                                    <TiDelete onClick={() => setUploadedImg('')} className="absolute cursor-pointer -top-2 -right-2 text-2xl text-white bg-red-600 rounded-full" />
                                </div>
                            }
                        </div>
                        <div type='file' className={`file-input relative bg-gray-100 dark:bg-gray-900 w-40 h-40 dark:border-gray-600 text-gray-400 border-dashed  border-2 border-gray-300 rounded-xl flex flex-col justify-center  items-center`}>

                            {
                                imgLoader ? <ImgLoader className="absolute w-full h-full"></ImgLoader> : <>
                                    <IoImagesOutline className="text-5xl" />
                                    <p>image upload</p>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        accept="image/*"
                                        onChange={handlImageUpload}
                                    />
                                </>
                            }
                        </div>
                    </div>
                </div>

                <AdminButton loading={btnLoading}></AdminButton>
            </form>
        </div>
    );
};

export default EditCategory;