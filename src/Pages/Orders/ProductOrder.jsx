import React, { useState } from 'react';
import { useGetProductOrdersQuery, useUpdateProductPayStatusMutation } from '../../Redux/api/baseApi';
import BtnLoader from '../../Components/BtnLoader/BtnLoader';
import { useSelector } from 'react-redux';
import ProductOrderModal from '../../Components/Modal/productOrderModal';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const ProductOrder = () => {
    const location = useLocation()
    const [setUpdateStatus] = useUpdateProductPayStatusMutation()
    const { email } = useSelector((state) => state.authenticationSlice)
    const { data: orders, isLoading, refetch } = useGetProductOrdersQuery(location?.pathname == '/dashboard/product/orders' ? 'null' : email)
    // console.log(data)
    const [selectdedProducts, setSelectedProducts] = useState([])
    const handleModal = async (products) => {
        setSelectedProducts(products?.result)
        document.getElementById('my_modal_3').showModal()
    }

    const handleProductStatus = (id, status) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${status} this product`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const data = await setUpdateStatus({ orderId: id, status: status }).unwrap()
                if (data.modifiedCount == 1) {
                    refetch()
                }

            }
        });
    }

    if (isLoading) {
        return <BtnLoader></BtnLoader>
    }
    return (
        <div className='w-full overflow-x-auto'>
            <table className=" table border-collapse border border-slate-300 rounded-lg shadow-md ">
                <thead class="bg-primary text-white">
                    <tr>
                        <th class="px-6 py-3 text-left text-sm font-medium">Order Id</th>
                        <th class="px-6 py-3 text-left text-sm font-medium">Payment Id</th>
                        <th class="px-6 py-3 text-left text-sm font-medium">Products</th>
                        <th class="px-6 py-3 text-left text-sm font-medium">Phone Number</th>
                        <th class="px-6 py-3 text-left text-sm font-medium">Address</th>
                        <th class="px-6 py-3 text-left text-sm font-medium">Postcode</th>
                        <th class="px-6 py-3 text-left text-sm font-medium">Total Amount</th>
                        <th class="px-6 py-3 text-left text-sm font-medium">Email</th>
                        <th class="px-6 py-3 text-left text-sm font-medium">Order Status</th>
                        <th class="px-6 py-3 text-left text-sm font-medium">Date</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    {
                        orders?.map((order, index) => (
                            <tr key={order._id} class={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                                <td class="px-6 py-3 text-sm text-primary border">{order._id}</td>
                                <td class="px-6 py-3 text-sm text-primary border">{order.paymentID}</td>
                                <td class="px-6 py-3 text-sm text-primary border"><span onClick={() => handleModal(order.productInfo)} className='cursor-pointer italic'>Click here to view</span></td>
                                <td class="px-6 py-3 text-sm text-gray-800 border">{order.userInfo.phoneNumber}</td>
                                <td class="px-6 py-3 text-sm text-gray-800 border">{order.userInfo.streetAddress}</td>
                                <td class="px-6 py-3 text-sm text-gray-800 border">{order.userInfo.postCode}</td>
                                <td class="px-6 py-3 text-sm text-gray-800 border">{order.productInfo.totalAmount}</td>
                                <td class="px-6 py-3 text-sm text-gray-800 border">{order.userInfo.email}</td>
                                <td className='w-40 px-2'>
                                    {
                                        location?.pathname == '/dashboard/product/orders'?<div>
                                        {
                                            order.status == 'pending' && <button onClick={() => handleProductStatus(order._id, 'confirm')} className='btn bg-orange-400 text-white'>Is Concfirmed</button>
                                        }
                                        {
                                            order.status == 'confirm' && <button onClick={() => handleProductStatus(order._id, 'delivered')} className='btn bg-blue-700 text-white'>Is Delivered</button>
                                        }
                                        {
                                            order.status == 'delivered' && <span className='flex gap-2 items-center'><span className=' bg-primary text-white p-2 rounded-md'>Delivered</span> <IoMdCheckmarkCircleOutline className='text-primary' /></span>
                                        }
                                    </div>: <span class={`px-3 py-1 text-sm font-medium rounded-full ${order.status === 'delivered' ? 'bg-green-500 text-white' : order.status === 'confirm' ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'}`}>
                                        {order.status}
                                    </span>
                                    }
                                </td>
                                <td class="px-6 py-3 text-sm text-gray-800 border">{order.date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* Modal    */}
            <ProductOrderModal products={selectdedProducts}></ProductOrderModal>
        </div>
    );
};

export default ProductOrder;