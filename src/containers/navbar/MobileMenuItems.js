import React from 'react'

const MobileMenuItems = ({handleClick}) => {
    return (
        <ul className='absolute w-32 top-14 left-0 bottom-0 bg-green-500 py-2'>
            <li className='py-2 pl-5 rounded hover:bg-green-600 hover:text-white hover:shadow-lg'>
                <a onClick={handleClick} className='block' href='#'>Home</a>
            </li>
            <li className='py-2 pl-5 rounded hover:bg-green-600 hover:text-white hover:shadow-lg'>
                <a onClick={handleClick} className='block' href='#'>Movies</a>
            </li>
            <li className='py-2 pl-5 rounded hover:bg-green-600 hover:text-white hover:shadow-lg'>
                <a onClick={handleClick} className='block' href='#'>Tv Series</a>
            </li>
        </ul>
    )
}

export default MobileMenuItems
