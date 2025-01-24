import { IoImagesOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import AdminButton from "../../../Components/Admin/AdminButton/AdminButton";
import AdminBaredCrumb from "../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb";
import { FaHome } from "react-icons/fa";
import { toast } from 'react-toastify';
import BtnLoader from "../../../Components/BtnLoader/BtnLoader";
import { useGetCategoryByIdQuery, useGetCategoryImageMutation, useUpdateCategoryMutation } from "../../../Redux/api/baseApi";
import { TiDelete } from "react-icons/ti";
import { useParams } from "react-router-dom";



const EditCategory = () => {
    const { id } = useParams()
    const imageInputRef = useRef()
    const { data: category, isLoading: categoryLoading } = useGetCategoryByIdQuery(id)
    const [updateCategory, { data, isLoading }] = useUpdateCategoryMutation()
    const [setImage, { isLoading: imgLoader }] = useGetCategoryImageMutation()
    const [upLoadedImg, setUploadedImg] = useState('')
    // const [loadingState,setLoadingState]=useState(false)
    const handlImageUpload = async (e) => {
        const file = e.target.files[0]
        if (!file) {
            return;
        }
        setUploadedImg(file)

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const categoryName = form.categoryName.value.toLowerCase();
        const categoryColor = form.categoryColor.value.toLowerCase();
        const categoryImg = upLoadedImg || category?.categoryImg;

        if (!categoryName || !categoryColor || !categoryImg) {
            return toast.error('Please fill all the details!', { theme: "colored" });
        }

        const formData = new FormData();
        formData.append('editedImage', categoryImg);
        let imgResult;
        if (upLoadedImg) {
            imgResult = await setImage(formData).unwrap();
        }
        const categoryData = {
            categoryName,
            categoryColor,
            categoryImg: imgResult?.name == "editedImage" ? imgResult.imageUrl : categoryImg
        };
        const data = await updateCategory({ _id: category._id, updatedCategory: categoryData }).unwrap()
        if (data?.modifiedCount == 1) {
            toast.success('successFully Updeted!')
            setUploadedImg("")
            imageInputRef.current.value = null
        }

    };

    if (categoryLoading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div className="w-full">
            <AdminBaredCrumb title='Edit Category'>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full"> <FaHome className="mr-2"></FaHome> Dashboard</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Category</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Edit Category</a></li>
            </AdminBaredCrumb>
            <form onSubmit={handleSubmit} className="space-y-6  px-3 py-5 rounded-xl dark:bg-dark drop-shadow-lg mt-10">
                <div>
                    <label for="username" class="block text-sm text-black dark:text-gray-300">Category Name</label>

                    <input type="text" defaultValue={category?.categoryName} name="categoryName" class="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-400 bg-gray-50 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>
                <div>
                    <label for="username" class="block text-sm text-black dark:text-gray-300">Color</label>

                    <input type="text" defaultValue={category?.categoryColor} name="categoryColor" class="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-400 bg-gray-50 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div>
                    <label for="username" class="block text-xl font-semibold text-black dark:text-gray-300 mb-5">Media And Published</label>
                    <div className="flex gap-5">
                        <div>
                            {
                                <div className="w-40 h-40 relative p-5  border-dashed border-2 border-gray-300 rounded-xl">
                                    <img className="w-full h-full rounded-xl" src={upLoadedImg ? URL.createObjectURL(upLoadedImg) : category?.categoryImg} alt="" />
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

                <AdminButton loading={isLoading || imgLoader}></AdminButton>
            </form>
        </div>
    );
};

export default EditCategory;