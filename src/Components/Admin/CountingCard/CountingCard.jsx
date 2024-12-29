import React from 'react';
import { SiProducthunt } from 'react-icons/si';

const CountingCard = ({ leftColor, RightColor, title, count, icon }) => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to right, ${leftColor}, ${RightColor})` }} className=' text-white w-full rounded-lg flex justify-between items-center p-5'>
            <div>
                <h3 className='text-lg font-bold'>{title || 'Total'}</h3>
                <p className='text-4xl font-bold'>{count || 0}</p>
            </div>
            {
                icon
            }
        </div>
    );
};

export default CountingCard;