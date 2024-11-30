
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ListingTitle from '../../Components/ListingTitle/ListingTitle';


const Listing = () => {

    return (
        <div>
            <ListingTitle></ListingTitle>
            <div className='flex mt-10'>
                <Sidebar></Sidebar>
                <div className='w-9/12 overflow-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Listing;