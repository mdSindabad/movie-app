import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <ImSpinner9 className='text-3xl text-green-500 animate-spin' />
        </div>
    )
}

export default Spinner;
