import { IoIosLogOut, IoIosSearch } from 'react-icons/io';
import logo from '../../assets/logo.jpg'
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { IoCartOutline, IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Theme from '../../Components/Theme/Theme';
import { auth } from '../../Firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { useGetAllCartsQuery } from '../../Redux/api/baseApi';
import { useSelector } from 'react-redux';
import { FaPerson } from 'react-icons/fa6';
import useUserRole from '../../Hooks/useUserRole';
const Header = () => {
    const { email } = useSelector((state) => state.authenticationSlice)
    const { data: carts } = useGetAllCartsQuery(email)
    const [isAdmin, isAdminLoading] = useUserRole()

    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div className="lg:flex hidden flex-wrap items-center gap-10 justify-between mb-5 dark:bg-dark py-5 px-2">
            {/* Logo */}
            <div className="w-full sm:w-4/12 lg:w-auto mb-4 sm:mb-0">
                <img className="w-full" src={logo} alt="Logo" />
            </div>

            {/* Search Input */}
            <div className="flex items-center justify-center w-full sm:w-4/12 lg:w-auto mb-4 sm:mb-0">
                <div className="flex items-center w-full flex-col relative overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <input
                        className="px-6 w-full py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                        type="text"
                        name="email"
                        placeholder="Search for items--"
                        aria-label="Enter your search"
                    />
                    <IoIosSearch className="text-2xl absolute right-3" />
                </div>
            </div>

            {/* Dropdown */}
            <div className="flex items-center justify-center w-full sm:w-4/12 lg:w-auto mb-4 sm:mb-0">
                <div className="w-full flex-col relative overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <MdOutlineLocationOn className="text-2xl absolute top-1/2 translate-y-[-50%]" />
                    <select className="select select-primary text-primary w-full text-center border-none focus:outline-0">
                        <option disabled selected>
                            All
                        </option>
                        <option>Game of Thrones</option>
                        <option>Lost</option>
                        <option>Breaking Bad</option>
                        <option>Walking Dead</option>
                    </select>
                </div>
            </div>

            {/* Wishlist */}
            <div className="flex gap-2 items-center mb-4 sm:mb-0">
                <div className="indicator">
                    <FaRegHeart className="text-2xl" />
                    <span className="badge bg-primary text-white badge-sm indicator-item">8</span>
                </div>
                <p>Wishlist</p>
            </div>

            {/* Cart */}
            <div className="flex gap-2 items-center mb-4 sm:mb-0">
                <Link to="/carts">
                    <div className="indicator">
                        <IoCartOutline className="text-2xl" />
                        <span className="badge bg-primary text-white badge-sm indicator-item">
                            {carts?.result?.length || 0}
                        </span>
                    </div>
                </Link>
                <p>Cart</p>
            </div>

            {/* Account / Sign In */}
            <div className="dropdown dropdown-end">
                {email ? (
                    <>
                        <div tabIndex={0} role="button" className="flex gap-2 items-center drop-shadow-md border p-2 rounded-md m-1">
                            <IoPersonOutline />
                            <span>Account</span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">
                            <Link to="/account">
                                <li>
                                    <a href="">
                                        <IoPersonOutline /> <span>My Account</span>
                                    </a>
                                </li>
                            </Link>
                            <Link to="/account">
                                <li>
                                    <a href="" onClick={handleLogout}>
                                        <IoIosLogOut /> <span>Logout</span>
                                    </a>
                                </li>
                            </Link>
                        </ul>
                    </>
                ) : (
                    <Link to='/signIn'>
                        <button type="button" className="btn bg-primary text-white">
                            Sign In
                        </button>
                    </Link>
                )}

            </div>
            {
             isAdmin &&   <Link to='/dashboard'>
                    <button className='btn bg-primary text-white'>Admin</button>
                </Link>
            }
            {/* Theme Toggle */}
            <Theme />
        </div>


    );
};

export default Header;