import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenuItems = ({handleClick}) => {
    return (
        <ul className='absolute w-32 top-14 right-0 py-2'>
            <li className='py-2 pl-5 rounded m-1 bg-black text-gray-300 shadow-lg'>
                <Link onClick={handleClick} className='block' to='/'>Home</Link>
            </li>
            <li className='py-2 pl-5 rounded m-1 bg-black text-gray-300 shadow-lg'>
                <Link onClick={handleClick} className='block' to='/movies'>Movies</Link>
            </li>
            <li className='py-2 pl-5 rounded m-1 bg-black text-gray-300 shadow-lg'>
                <Link onClick={handleClick} className='block' to='/txv-series'>Tv Series</Link>
            </li>
        </ul>
    )
}

export default MobileMenuItems
