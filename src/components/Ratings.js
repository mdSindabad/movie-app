import React from 'react';
import { FaStar } from 'react-icons/fa';


const Ratings = ({ type, vote }) => {
    return (
        <div className='flex items-center md:my-3'>
            <span className='text-xs border bg-gray-800 bg-opacity-60 border-gray-300 rounded py-0.5 px-2 mr-5 md:text-base'>{type}</span>
            <FaStar />
            <span className='text-xs text-gray-200 rounded px-1 py-0.5 md:text-base'>{vote}</span>
        </div>
    )
}

export default Ratings;
