import React from 'react';

const ProductOrderModal = ({ products }) => {
    console.log(products)
    return (
        <dialog id="my_modal_3" className="modal ">
            <div className="modal-box max-w-full">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <table class="min-w-full table-auto border-collapse border border-slate-300 rounded-lg shadow-md">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th class="px-6 py-3 text-left text-sm font-medium">Product Id</th>
                            <th class="px-6 py-3 text-left text-sm font-medium">Product Title</th>
                            <th class="px-6 py-3 text-left text-sm font-medium">Image</th>
                            <th class="px-6 py-3 text-left text-sm font-medium">Quantity</th>
                            <th class="px-6 py-3 text-left text-sm font-medium">Price</th>
                            <th class="px-6 py-3 text-left text-sm font-medium">SubTotal</th>
                            
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        {
                            products?.map((product, index) => (
                                <tr key={product._id} class={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                                    <td class="px-6 py-3 text-sm text-primary border">{product._id}</td>
                                    <td class="px-6 py-3 text-sm text-primary border">{product?.productName?.length>50?product?.productName.substring(0,20):product?.productName}</td>
                                    <td class="px-6 py-3 text-sm text-primary border">
                                        <img className='w-10 h-10' src={product.productImage} alt="" />
                                    </td>
                                    <td class="px-6 py-3 text-sm text-gray-800 border">{product.count}</td>
                                    <td class="px-6 py-3 text-sm text-gray-800 border">{product.price}</td>
                                    <td class="px-6 py-3 text-sm text-gray-800 border">{product.count*product.price}</td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </dialog>
    );
};

export default ProductOrderModal;