import { BiCategory } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdHeadphones } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 dark:bg-dark sticky top-0 z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li>
                            <a>Fashion</a>
                            <ul className="p-2">
                                <li><a>Man</a></li>
                                <li><a>Woman</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Electronics</a>
                            <ul className="p-2">
                                <li><a>Mobile</a></li>
                                <li><a>Laptop</a></li>
                                <li><a>Smart Watch</a></li>
                                <li><a>Cameras</a></li>
                            </ul>
                        </li>
                        <li><a>Bags</a></li>
                        <li><a>Footwear</a></li>
                        <li><a>Groceries</a></li>
                        <li><a>Beauty</a></li>

                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-primary text-white"><BiCategory /> Browse All Ctegories <IoIosArrowDown />

                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                        <details>
                            <summary>Fashion</summary>
                            <ul className="p-2">
                                <li><a>Man</a></li>
                                <li><a>Woman</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Electronics</summary>
                            <ul className="p-2">
                                <li><a>Mobile</a></li>
                                <li><a>Laptop</a></li>
                                <li><a>Smart Watch</a></li>
                                <li><a>Cameras</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Bags</a></li>
                    <li><a>Footwear</a></li>
                    <li><a>Groceries</a></li>
                    <li><a>Beauty</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <MdHeadphones className="text-3xl" />
                <div>
                    <h2 className="text-primary">1900 - 888</h2>
                    <p className="">24/7 Support Center</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;