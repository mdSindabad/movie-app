import React from 'react'
import { Link } from 'react-router-dom'

const DesktopMenu = () => {
    return (
        <ul className='hidden md:flex'>
            <li className='py-2 px-5 rounded text-gray-300 hover:border-gray-400 border-transparent border-2 hover:border-current'>
                <Link className='block' to='/'>Home</Link>
            </li>
            <li className='py-2 px-5 rounded text-gray-300 ml-2 hover:border-gray-400 border-transparent border-2 hover:border-current'>
                <Link className='block' to='/movies'>Movies</Link>
            </li>
            <li className='py-2 px-5 rounded text-gray-300 ml-2 hover:border-gray-400 border-transparent border-2 hover:border-current'>
                <Link className='block' to='/tv-series'>Tv Series</Link>
            </li>
        </ul>
    )
}

export default DesktopMenu
