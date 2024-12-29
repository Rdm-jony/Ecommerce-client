import React, { useEffect, useRef, useState } from 'react';
import BtnLoader from '../../../Components/BtnLoader/BtnLoader';
import { FaHome, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { IoImagesOutline } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { useForm } from 'react-hook-form';
import AdminButton from '../../../Components/Admin/AdminButton/AdminButton';
import { toast } from 'react-toastify';
import AdminBaredCrumb from '../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb';
import { useGetCategoryImageMutation, useGetCategoryQuery, useGetCountriesApiQuery, useGetSubCategoryBycategoryQuery, useUploadProductMutation } from '../../../Redux/api/baseApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryFilter, setCurrentCategory, setRating, setSelectedCountry, setShowCountryBox, setShowSizebox, setSize } from '../../../Redux/Features/productUploadSlice';
import { fetchCountries } from '../../../Redux/Features/countrySlice';

const ProductUpload = () => {
    const countryInputRef = useRef(null);
    const disPatch = useDispatch()
    const { showSizeBox, showCountryBox, caurrentCategory, selectedCountry, countryFilter, size, rating } = useSelector((state) => state.productUploadSlice)
    const { data: categories, isLoading: categoryLoading } = useGetCategoryQuery()
    const { data: subCategory, refetch } = useGetSubCategoryBycategoryQuery(caurrentCategory)
    const { isLoading: countryLoading, countries } = useSelector((state) => state.countrySlice)
    // const { data: countries } = useGetCountriesApiQuery()
    const [setImages, { isLoading: imgLoader }] = useGetCategoryImageMutation()
    const [setNewProduct, { isLoading }] = useUploadProductMutation()
    const [upLoadedImg, setUploadedImg] = useState([])
    const {
        register,
        formState: { errors }, reset,
        handleSubmit, setValue
    } = useForm({
        defaultValues: {
            locationCountry: []
        }
    })


    const handlImageUpload = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        if (!file) {
            return;
        }
        setUploadedImg(prev => [file, ...prev])

    }

    const handleDeleteUploadImg = (img) => {
        const remainingImg = upLoadedImg.filter(imgUp => imgUp != img)
        setUploadedImg([...remainingImg])
        setValue('productImage', [...remainingImg])
    }

    const handleCountry = (country, e) => {
        if (!selectedCountry.includes(country)) {
            const newSelectedCountry = [...selectedCountry, country];
            disPatch(setSelectedCountry(newSelectedCountry))
            setValue('locationCountry', [...selectedCountry]);
            disPatch(setShowCountryBox(false))

        }
        // document.getElementById('countryInputBox').value = '';
        countryInputRef.current.value = ""

    }
    useEffect(() => {
        disPatch(fetchCountries())
    }, [])
    useEffect(() => {
        disPatch(setCountryFilter({ countries, searchText: '' }))
    }, [countries])

    useEffect(() => {
        setValue('productSize', size)
    }, [size])

    useEffect(() => {
        if (selectedCountry.length > 0 && countryInputRef.current) {
            setValue('locationCountry', selectedCountry)
            countryInputRef.current.value = '';
        }

    }, [selectedCountry])

    const handleRating = (v) => {
        disPatch(setRating(v))
        setValue('rating', v)
    }

    const onSubmit = async (productData) => {
        const formData = new FormData()
        upLoadedImg.forEach((fileData) => {
            formData.append('galleryImage[]', fileData);
        });

        const imagesUrl = await setImages(formData).unwrap()

        if (imagesUrl?.name == 'galleryImage') {
            productData.productImage = imagesUrl?.imageUrl
            const data = await setNewProduct(productData).unwrap()
            if (data?.insertedId) {
                setUploadedImg([])
                disPatch(setSize(null))
                disPatch(setRating(1))
                disPatch(setSelectedCountry([]))
                disPatch(setCurrentCategory(null))
                toast.success(`Successfully added!${productData?.productName}`)
                reset()


            } else {
                return toast.error(data?.error, { theme: "colored", })

            }

        } else {
            return toast.error('There was an image upload error!', { theme: "colored", })

        }


    }
    if (countryLoading || categoryLoading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div className='w-full'>
            <AdminBaredCrumb title='Add Category'>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full"> <FaHome className="mr-2"></FaHome> Dashboard</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Products</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Products Upload</a></li>
            </AdminBaredCrumb>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>
                <div className='dark:bg-dark w-full grid grid-cols-2 gap-10 p-5'>
                    <label className="form-control w-full  col-span-2">
                        <div className="label">
                            <span className="label-text">PRODUCT NAME
                            </span>
                        </div>
                        <input type="text"  {...register("productName", { required: true })}
                            aria-invalid={errors.productName ? "true" : "false"} placeholder="" className="input input-bordered w-full " />
                        {errors.productName?.type === "required" && (
                            <p className='text-red-600 text-xs'>PRODUCT NAME is required</p>
                        )}
                    </label>
                    <label className="form-control w-full  col-span-2">
                        <div className="label">
                            <span className="label-text">DESCRIPTION</span>
                        </div>
                        <textarea  {...register("productDescription", { required: true })} aria-invalid={errors.productDescription ? "true" : "false"} className="textarea textarea-bordered h-24"></textarea>
                        {errors.productDescription?.type === "required" && (
                            <p className='text-red-600 text-xs'>DESCRIPTION is required</p>
                        )}
                    </label>
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">CATEGORY</span>
                        </div>
                        <select {...register("productCategory", { validate: value => value !== '' })} aria-invalid={errors.productCategory ? "true" : "false"} onChange={(e) => {
                            const selectedCategory = e.target.value;
                            disPatch(setCurrentCategory(selectedCategory));
                        }} className="select select-bordered w-full dark:bg-gray-900">
                            <option value='' disabled selected>None</option>
                            {
                                categories?.map(cat => <option key={cat._id} value={cat?.categoryName}>{cat?.categoryName}</option>)
                            }
                        </select>
                        {errors.productCategory?.type == 'validate' && (
                            <p className='text-red-600 text-xs'>Please select a valid category'</p>
                        )}
                    </label>
                    {
                        subCategory?.length > 0 && <label className="form-control w-full max-w-xs`">
                            <div className="label">
                                <span className="label-text">SUB CATEGORY</span>
                            </div>
                            <select  {...register("subCategory")}
                                className="select select-bordered w-full dark:bg-gray-900">
                                {/* <option value='' disabled selected>None</option> */}
                                {
                                    subCategory?.map((option, idx) => <option key={idx} value={option}>{option}</option>)
                                }
                            </select>
                        </label>
                    }
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">PRICE
                            </span>
                        </div>
                        <input  {...register("price", { required: true })} aria-invalid={errors.price ? "true" : "false"} type="number" placeholder="" className="input input-bordered w-full " />
                        {errors.price && (
                            <p className='text-red-600 text-xs'>PRICE is required</p>
                        )}
                    </label>
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">OLD PRICE
                            </span>
                        </div>
                        <input  {...register("oldPrice")} type="number" placeholder="" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">Is Featured</span>
                        </div>
                        <select  {...register("isFeatured")} className="select select-bordered w-full dark:bg-gray-900">
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">Is Popular</span>
                        </div>
                        <select  {...register("isPopular")} className="select select-bordered w-full dark:bg-gray-900">
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">PRODUCT STOCK
                            </span>
                        </div>
                        <input {...register("productStock", { required: true })} aria-invalid={errors.productStock ? "true" : "false"} type="number" placeholder="" className="input input-bordered w-full " />
                        {errors.productStock && (
                            <p className='text-red-600 text-xs'>PRODUCT STOCK is required</p>
                        )}
                    </label>
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">BRAND
                            </span>
                        </div>
                        <input {...register("brand")} type="text" placeholder="" className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">DISCOUNT
                            </span>
                        </div>
                        <input {...register("discount", { required: true })} aria-invalid={errors.discount ? "true" : "false"} type="number" placeholder="" className="input input-bordered w-full " />
                        {errors.discount && (
                            <p className='text-red-600 text-xs'>discount is required</p>
                        )}
                    </label>
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">PRODUCT RAMS
                            </span>
                        </div>
                        <input  {...register("rams")} type="text" placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">PRODUCT WEIGHT
                            </span>
                        </div>
                        <input  {...register("weight")} type="text" placeholder="" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full max-w-xs`">
                        <div className="label">
                            <span className="label-text">PRODUCT SIZE</span>
                        </div>
                        <div className='relative' {...register("productSize")}>
                            <input onClick={() => disPatch(setShowSizebox(!showSizeBox))} type="text" readOnly value={size.join(", ")} placeholder="" className="input input-bordered w-full " />

                            <div className={`dark:bg-gray-900 absolute z-20 w-full ${showSizeBox ? '' : 'hidden'}`}>
                                <label className="cursor-pointer label">
                                    <span className="label-text">M</span>
                                    <input name='sizeBox' value='M' onClick={(e) => disPatch(setSize(e))} type="checkbox" checked={size.includes('M')} className="checkbox checkbox-success" />
                                </label>
                                <label className="cursor-pointer label">
                                    <span className="label-text">L</span>
                                    <input name='sizeBox' value='L' onClick={(e) => disPatch(setSize(e))} type="checkbox" checked={size.includes('L')} className="checkbox checkbox-success" />
                                </label>
                                <label className="cursor-pointer label">
                                    <span className="label-text">Xl</span>
                                    <input name='sizeBox' value='Xl' onClick={(e) => disPatch(setSize(e))} type="checkbox" checked={size.includes('Xl')} className="checkbox checkbox-success" />
                                </label>
                                <label className="cursor-pointer label">
                                    <span className="label-text">S</span>
                                    <input name='sizeBox' value='S' onClick={(e) => disPatch(setSize(e))} type="checkbox" checked={size.includes('S')} className="checkbox checkbox-success" />
                                </label>
                            </div>
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">RATINGS</span>
                        </div>
                        <Rating
                            {...register("rating", { required: true })} aria-invalid={errors.productStock ? "true" : "false"}
                            onChange={(v) => handleRating(v)}
                            className='!flex gap-1'
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar className="text-gray-400" />
                            }
                            placeholderSymbol={<FaStar className="text-[#FAAF00] dark:text-slate-50 " />}
                            fullSymbol={<FaStar className="text-[#FAAF00] dark:text-slate-50 " />}
                        />
                        {errors.rating && (
                            <p className='text-red-600 text-xs'>Rating is required</p>
                        )}
                    </label>

                    <label htmlFor="" className='relative col-span-2'>
                        <label className="w-full  input input-bordered relative flex items-center gap-2" {...register("locationCountry", { required: selectedCountry.length == 0 })} aria-invalid={errors.locationCountry ? "true" : "false"}>
                            <div className='flex gap-2'>
                                {
                                    selectedCountry.length > 0 && selectedCountry?.map(country => <button className='btn btn-sm cursor-auto hover:bg-white text-gray-500 flex dark:bg-white' type="">{country} <span onClick={() => {
                                        const newSelectedCountry = selectedCountry.filter(v => v !== country);
                                        disPatch(setSelectedCountry(newSelectedCountry))

                                    }} className='cursor-pointer'>x</span></button>)
                                }
                            </div>
                            <input type="text" ref={countryInputRef} onChange={(e) => disPatch(setCountryFilter({ countries, searchText: e.target.value }))} onClick={() => { disPatch(setShowCountryBox(!showCountryBox)), setCountryFilter([...countries]) }} placeholder="" className="grow" />

                            {errors.locationCountry && (
                                <p className='text-red-600 text-xs'>Location is required</p>
                            )}


                        </label>
                        <ul className={`dark:bg-gray-900 relative top-0 max-h-32 overflow-y-auto ${showCountryBox ? '' : 'hidden'}`}>
                            <li onClick={() => handleCountry('All')} className='dark:hover:bg-slate-50 dark:hover:text-black'>All</li>
                            {
                                countryFilter?.map(country => <li onClick={(e) => handleCountry(country, e)} className='dark:hover:bg-slate-50 dark:hover:text-black'>{country}</li>)
                            }
                        </ul>
                    </label>

                </div>
                <div className='dark:bg-dark p-5 my-10'>
                    <label for="username" class="block text-xl font-semibold text-black dark:text-gray-300 mb-5">Media And Published</label>
                    <div className="flex gap-5 flex-wrap">
                        <div className='flex gap-5'>
                            {
                                upLoadedImg?.map(img => <div className="lg:w-40 w-28 lg:h-40 h-28 relative p-5  border-dashed border-2 border-gray-300 rounded-xl">
                                    <img className="w-full h-full rounded-xl" src={URL.createObjectURL(img)} alt="" />
                                    <TiDelete onClick={() => handleDeleteUploadImg(img)} className="absolute cursor-pointer -top-2 -right-2 text-2xl text-white bg-red-600 rounded-full" />
                                </div>)
                            }
                        </div>
                        <div type='file' className={`file-input relative bg-gray-100 dark:bg-gray-900 lg:w-40 w-28 lg:h-40 h-28 dark:border-gray-600 text-gray-400 border-dashed  border-2 border-gray-300 rounded-xl flex flex-col justify-center  items-center`}>
                            <IoImagesOutline className="lg:text-5xl text-2xl" />
                            <p className='lg:text-lg text-sm'>image upload</p>
                            <input
                                {...register("productImage", { required: upLoadedImg.length == 0 })} aria-invalid={errors.productImage ? "true" : "false"}
                                type="file"
                                id="fileInput"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                accept="image/*"
                                onChange={handlImageUpload}
                            />
                            {errors.productImage && (
                                <p className="text-red-600 text-xs">Product image is required</p>
                            )}
                        </div>
                    </div>
                </div>
                <AdminButton loading={isLoading || imgLoader} ></AdminButton>
            </form>
        </div>
    );
};

export default ProductUpload;