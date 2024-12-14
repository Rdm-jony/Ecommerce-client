import { MdDarkMode, MdDashboard, MdOutlineLegendToggle } from 'react-icons/md';
import adminLogo from '../../../assets/admin/adminLogo.png'
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import Dropdown from '../Component/Dropdown';
import { BiSolidCategory } from 'react-icons/bi';
import Theme from '../../../Components/Theme/Theme';
const AdminDashboardLayout = () => {
    const [openSidebar, setOpenSidebar] = useState(true)

    return (
        <div className='mx-auto max-w-7xl'>
            <nav className='flex items-center dark:bg-dark justify-between py-3 '>
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-2'>
                        <img className='w-10' src={adminLogo} alt="" />
                        <h2 className='text-4xl font-semibold'>Ecommerce</h2>
                    </div>
                    <div className='bg-cyan-50 p-2 rounded-full'>
                        <MdOutlineLegendToggle onClick={() => setOpenSidebar(!openSidebar)} className='text-2xl ' />
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <Theme></Theme>
                    <div className='bg-cyan-50 p-2 rounded-full'>
                        <IoMdNotificationsOutline className='text-2xl ' />
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='bg-primary text-white p-2 w-12 h-12 flex justify-center items-center rounded-full'>
                            J
                        </div>
                        <div>
                            <p className='font-semibold'>Jony Das</p>
                            <p>jonydascse@gmail.com</p>
                        </div>
                    </div>
                </div>

            </nav>
            <div className='flex '>
                <div>
                    <aside className={`flex ${openSidebar ? 'w-64' : ' w-0 !p-0  '} sticky top-0 overflow-auto  transform transition-all duration-500 flex-col  px-4 py-8   border-r rtl:border-r-0 rtl:border-l dark:bg-dark dark:border-gray-700`}>
                        <a href="#">
                            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/logo.svg" alt="" />
                        </a>

                        <div className="relative mt-6">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-7 border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                        </div>

                        <div className="flex flex-col justify-between flex-1 mt-6">
                            <nav>

                                <Link to='/dashboard'>
                                    <Dropdown name="Dashboard" icon={<MdDashboard />} dropdown={false}>
                                    </Dropdown></Link>
                                <Dropdown name="Category" icon={<BiSolidCategory />} dropdown={true}>
                                    <Link to="/dashboard/category"><li><a>Category List</a></li></Link>
                                    <Link to='category/add'><li><a>Add Category</a></li></Link>
                                    <Link to='subCategory/add'><li><a>Add a sub Category</a></li></Link>
                                    <Link to='subCategory'><li><a>Sub Category List</a></li></Link>
                                </Dropdown>

                                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">Tickets</span>
                                </a>

                                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">Settings</span>
                                </a>

                                <hr className="my-6 border-gray-200 dark:border-gray-600" />

                                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">Tickets</span>
                                </a>

                                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="mx-4 font-medium">Settings</span>
                                </a>
                            </nav>

                            <a href="#" className="flex items-center px-4 -mx-2">
                                <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                                <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
                            </a>
                        </div>
                    </aside>
                </div>
                <div className='p-10 bg-gray-100  dark:bg-black  w-full  transition-all duration-500'>

                    <Outlet></Outlet>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;