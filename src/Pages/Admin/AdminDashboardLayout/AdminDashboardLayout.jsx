import { MdDarkMode, MdDashboard, MdHome, MdOutlineLegendToggle } from 'react-icons/md';
import adminLogo from '../../../assets/admin/adminLogo.png'
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import Dropdown from '../Component/Dropdown';
import { BiSolidCategory } from 'react-icons/bi';
import Theme from '../../../Components/Theme/Theme';
import { useSelector } from 'react-redux';
const AdminDashboardLayout = () => {
    const [openSidebar, setOpenSidebar] = useState(true)
    const { email, name } = useSelector((state) => state.authenticationSlice)

    return (
        <div className='mx-auto max-w-7xl'>
            <nav className='flex items-centern  dark:bg-dark justify-between py-3 '>
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-2'>
                        <img className='w-10' src={adminLogo} alt="" />
                        <h2 className='text-4xl font-semibold'>Ecommerce</h2>
                    </div>
                    <div className='bg-cyan-50 p-2 rounded-full'>
                        <label htmlFor="my-drawer-2" className='text-2xl lg:hidden drawer-button '>
                            <MdOutlineLegendToggle />
                        </label>

                        <MdOutlineLegendToggle onClick={() => setOpenSidebar(!openSidebar)} className='text-2xl lg:inline hidden' />
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <Theme></Theme>
                    <div className='bg-cyan-50 p-2 rounded-full'>
                        <IoMdNotificationsOutline className='text-2xl ' />
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='bg-primary text-white p-2 w-12 h-12 flex justify-center items-center rounded-full'>
                            <span className='uppercase font-semibold text-xl'>{name[0]}</span>
                        </div>
                        <div>
                            <p className='font-semibold capitalize'>{name}</p>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>

            </nav>
            <div className={`drawer ${openSidebar ? 'lg:drawer-open' : ''} `}>
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">

                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-4">
                        {/* Sidebar content here */}
                        <Link to='/'> <li><a><MdHome /> Home</a></li></Link>

                        <Link to='/dashboard'> <li><a><MdDashboard /> Dashboard</a></li></Link>
                        <Link to='/dashboard/product/orders'> <li><a><MdDashboard /> Orders</a></li></Link>
                        <li>
                            <details>
                                <summary><BiSolidCategory /> Products</summary>
                                <ul className="p-2">
                                    <Link to='productList'><li><a>Product List</a></li></Link>
                                    <Link to='product/add'><li><a>Product Upload</a></li></Link>

                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary><BiSolidCategory /> Category</summary>
                                <ul className="p-2">
                                    <Link to='/dashboard/category'><li><a>Category List</a></li></Link>
                                    <Link to='category/add'><li><a>Add Cetegory</a></li></Link>
                                    <Link to='subCategory'><li><a>Sub Cetegory List</a></li></Link>
                                    <Link to='subCategory/add'><li><a>Add a Sub Cetegory</a></li></Link>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary><BiSolidCategory /> Home Banner</summary>
                                <ul className="p-2">
                                    <Link to='bannerList'><li><a>Banner List</a></li></Link>
                                    <Link to='banner/add'><li><a>add Banner</a></li></Link>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;