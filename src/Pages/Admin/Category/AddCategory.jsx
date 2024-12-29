import { IoImagesOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import Loader from "../Component/ImgLoader";
import { TiDelete } from "react-icons/ti";
import AdminButton from "../../../Components/Admin/AdminButton/AdminButton";
import AdminBaredCrumb from "../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb";
import { FaHome } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useAddCategoryMutation, useGetCategoryImageMutation } from "../../../Redux/api/baseApi";




const AddCategory = () => {
    const imageInputRef = useRef()
    const [setImage, { isLoading: imgLoader }] = useGetCategoryImageMutation()
    const [setCategory, { data, isLoading }] = useAddCategoryMutation()
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
        const categoryName = form.categoryName.value.toLowerCase().trim();
        const categoryColor = form.categoryColor.value.toLowerCase().trim();
        const categoryImg = upLoadedImg
        if (!categoryName || !categoryColor || !categoryImg) {
            return toast.error('Please fill all the details!', { theme: "colored", })
        }

        const formData = new FormData()
        formData.append('singleImage', categoryImg)
        const imgResult = await setImage(formData).unwrap()
        if (imgResult?.name == "singleImage") {
            const newCategory = { categoryName, categoryColor, categoryImg: imgResult.imageUrl }
            const data = await setCategory(newCategory).unwrap()
            if (data?.insertedId) {
                toast.success(`${categoryName} successfully added in category`)
                form.reset()
                setUploadedImg('')
            } else {
                return toast.error(data?.error, { theme: "colored", })
            }
        } else {
            return toast.error('There was an image upload error!', { theme: "colored", })
        }

    }


    return (
        <div className="w-full">
            <AdminBaredCrumb title='Add Category'>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full"> <FaHome className="mr-2"></FaHome> Dashboard</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Category</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Add Category</a></li>
            </AdminBaredCrumb>
            <form onSubmit={handleSubmitForm} className="space-y-6  px-3 py-5 rounded-xl dark:bg-dark drop-shadow-lg mt-10">
                <div>
                    <label for="username" class="block text-sm text-black dark:text-gray-300">Category Name</label>

                    <input type="text" name="categoryName" class="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-400 bg-gray-50 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>
                <div>
                    <label for="username" class="block text-sm text-black dark:text-gray-300">Color</label>

                    <input type="text" name="categoryColor" class="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-400 bg-gray-50 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div>
                    <label for="username" class="block text-xl font-semibold text-black dark:text-gray-300 mb-5">Media And Published</label>
                    <div className="flex gap-5">
                        <div>
                            {
                                upLoadedImg && <div className="w-40 h-40 relative p-5  border-dashed border-2 border-gray-300 rounded-xl">
                                    <img className="w-full h-full rounded-xl" src={URL.createObjectURL(upLoadedImg)} alt="" />
                                    <TiDelete onClick={() => {
                                        setUploadedImg('')
                                        imageInputRef.current.value = null
                                    }} className="absolute cursor-pointer -top-2 -right-2 text-2xl text-white bg-red-600 rounded-full" />
                                </div>
                            }
                        </div>
                        <div type='file' className={`file-input relative bg-gray-100 dark:bg-gray-900 w-40 h-40 dark:border-gray-600 text-gray-400 border-dashed ${upLoadedImg ? 'hidden' : ''} border-2 border-gray-300 rounded-xl flex flex-col justify-center  items-center`}>

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

export default AddCategory;