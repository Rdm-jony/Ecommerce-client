import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Dropdown = ({ name, children, icon, dropdown }) => {
    const [open, setOpen] = useState(false)
    return (
        <details className="dropdown w-full">
            <summary className="flex items-center cursor-pointer justify-between px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" onClick={() => setOpen(!open)}> <span className='flex items-center gap-3'>{icon}
                {name}</span> <FaAngleRight className={`${open ? 'rotate-90' : 'rotate-0'} ${dropdown ? '' : 'hidden'}`} /></summary>
            <ul className={`menu ${dropdown ? '' : "hidden"} dropdown-content !static transition-all duration-500 bg-base-100 rounded-box z-[1]   p-2 shadow`}>
                {children}
            </ul>
        </details>
    );
};

export default Dropdown;