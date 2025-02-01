import { FiSend } from 'react-icons/fi';
import subsImg from '../../../assets/newsletter.png'

const Subscribe = () => {
    return (
        <div className='lg:flex h-[350px] items-center bg-cyan-100 dark:bg-dark justify-between rounded-lg'>

            <div className='lg:w-6/12 p-16 space-y-4'>
                <h2 className='text-4xl font-semibold'>Stay home & get your daily <br className='lg:block hidden'/>
                    needs from our shop</h2>
                <h2 className='text-2xl font-semibold text-gray-400'>Start You'r Daily Shopping with Nest Mart</h2>
                <label className="input input-bordered flex items-center gap-2 relative">
                    <FiSend />
                    <input type="text" className="grow" placeholder="Your Email Address" />
                    <span className="btn bg-primary px-8 absolute -right-5 text-white rounded-full">Subscribe</span>
                </label>
            </div>
            <div className='lg:w-4/12 lg:block hidden'>
                <img src={subsImg} alt="" />
            </div>
        </div>
    );
};

export default Subscribe;