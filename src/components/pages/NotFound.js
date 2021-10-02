import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    return (
        <div className='text-center h-screen flex items-center justify-center text-gray-200'>
            <div>
                <h1 className='text-5xl font-bold'>404</h1>
                <p className='my-3 text-xl'> Oops, sorry we can't find that page! </p>
                <button className='flex items-center border border-green-500 rounded-full px-2 py-0.5 mx-auto transition text-green-600 hover:bg-green-600 hover:text-gray-200' onClick={() => history.push('/')}>
                    <FaArrowCircleLeft className='mr-2' />
                    Back to home page</button>
            </div>
        </div>
    )
}

export default NotFound;
