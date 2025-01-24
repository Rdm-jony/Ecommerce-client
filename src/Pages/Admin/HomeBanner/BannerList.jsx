import React from 'react';
import { useDeleteHomeBannerMutation, useGetHomeBannerQuery } from '../../../Redux/api/baseApi';
import BtnLoader from '../../../Components/BtnLoader/BtnLoader';
import { Link } from 'react-router-dom';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import AdminBaredCrumb from '../../../Components/Admin/AdminBreadCrumb/AdminBaredCrumb';
import { FaHome } from 'react-icons/fa';

const BannerList = () => {
    const { data: bannerList, isLoading,refetch } = useGetHomeBannerQuery()
    const [deleteBanner] = useDeleteHomeBannerMutation()
    const handleDeleteBanner = async (bannerId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const data = await deleteBanner(bannerId).unwrap()
                if (data.deletedCount == 1) {
                    refetch()
                    return toast.success('successfully deleted banner')
                }
            }
        });

    }
    if (isLoading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div className="w-full">
            <AdminBaredCrumb title='Banner List' >
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full"> <FaHome className="mr-2"></FaHome> Dashboard</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Home Banner</a></li>
                <li><a className="bg-gray-100 dark:bg-black p-2 rounded-full">Banner List</a></li>
            </AdminBaredCrumb>
            <div>
                <table class="border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr>
                            <th class="border border-slate-300 ... w-24" >IMAGE</th>

                            <th class="border border-slate-300 ... ">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bannerList?.map((banner, idx) => <tr className={`${idx % 2 == 0 ? 'dark:bg-dark dark:bg-opacity-50' : 'bg-slate-50 dark:bg-dark'}`}>
                                <td className='border border-slate-300 pl-5"'>
                                    <img src={banner.bannerImg} alt="" className='w-20 h-20' />
                                </td>
                                <td className='flex items-center h-20 pl-5 gap-2'>
                                    <Link to={`../banner/add/${banner._id}`}>
                                        <div className='w-7 h-7 rounded-sm cursor-pointer bg-primary flex justify-center items-center'>
                                            <MdModeEditOutline className='text-white' />
                                        </div>
                                    </Link>

                                    <div onClick={() => handleDeleteBanner(banner._id)} className='w-7 h-7 cursor-pointer rounded-sm bg-error flex justify-center items-center'>
                                        <MdDelete className='text-white' />
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BannerList;