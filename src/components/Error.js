import React from 'react'
import {BiError} from 'react-icons/bi'

const Error = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <h2 className='bg-red-200 py-1 px-4 rounded flex items-center text-xl text-red-800'>
            <BiError className='mr-1' />
                Something went wrong !</h2>
        </div>
    )
}

export default Error
