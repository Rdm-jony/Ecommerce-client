import { IoIosSearch } from 'react-icons/io';
import logo from '../../assets/logo.jpg'
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Theme from '../../Components/Theme/Theme';
import { auth } from '../../Firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { useGetAllCartsQuery } from '../../Redux/api/baseApi';
const Header = () => {
    const { data: carts } = useGetAllCartsQuery()

    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div className='flex items-center gap-10 mb-5 dark:bg-dark py-5 px-2'>
            <div className='w-5/12'>
                <img className='w-full' src={logo} alt="" />
            </div>

            <div class="flex items-center justify-center pb-6 md:py-0 w-full">

                <div class="flex items-center w-full flex-col  relative overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <input class="px-6 w-full py-3 text-gray-700  placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Search for items--" aria-label="Enter your email" />
                    <IoIosSearch className='text-2xl absolute right-3' />
                </div>

            </div>
            {/* dropdown */}
            <div class="flex w-5/12 items-center justify-center pb-6 md:py-0 ">

                <div class=" w-full flex-col relative  overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <MdOutlineLocationOn className='text-2xl absolute top-1/2 translate-y-[-50%]'></MdOutlineLocationOn>
                    <select className="select select-primary text-primary w-full text-center  border-none focus:outline-0">
                        <option disabled selected>All</option>
                        <option>Game of Thrones</option>
                        <option>Lost</option>
                        <option>Breaking Bad</option>
                        <option>Walking Dead</option>
                    </select>
                </div>

            </div>
            <div className='flex gap-2'>
                <div className="indicator">
                    <FaRegHeart className='text-2xl' />
                    <span className="badge bg-primary text-white badge-sm indicator-item">8</span>
                </div>
                <p>Wishlist</p>
            </div>
            <div className='flex gap-2'>
                <Link to='/carts'>
                    <div className="indicator" >
                        <IoCartOutline className='text-2xl' />
                        <span className="badge bg-primary text-white badge-sm indicator-item">{carts?.result.length}</span>
                    </div></Link>
                <p>Cart</p>
            </div>

            <div className="dropdown  dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 bg-primary">Click</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">
                    <li onClick={handleLogout}><a>LogOut</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <Theme></Theme>
        </div>

    );
};

export default Header;