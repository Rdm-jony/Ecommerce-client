import React from 'react';

const Loader = () => {
    return (
        <div className='flex flex-col items-center'>
            <span className="loading loading-spinner text-primary loading-md"></span>
            <p>Uploading.......</p>
        </div>

    );
};

export default Loader;