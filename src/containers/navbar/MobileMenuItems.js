import React from 'react'

const MobileMenuItems = ({handleClick}) => {
    return (
        <ul className='absolute w-32 top-14 right-0 py-2'>
            <li className='py-2 pl-5 rounded m-1 bg-gray-700 bg-opacity-60 text-gray-300 shadow-lg'>
                <a onClick={handleClick} className='block' href='#'>Home</a>
            </li>
            <li className='py-2 pl-5 rounded m-1 bg-gray-700 bg-opacity-60 text-gray-300 shadow-lg'>
                <a onClick={handleClick} className='block' href='#'>Movies</a>
            </li>
            <li className='py-2 pl-5 rounded m-1 bg-gray-700 bg-opacity-60 text-gray-300 shadow-lg'>
                <a onClick={handleClick} className='block' href='#'>Tv Series</a>
            </li>
        </ul>
    )
}

export default MobileMenuItems
