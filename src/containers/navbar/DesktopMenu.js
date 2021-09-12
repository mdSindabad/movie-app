import React from 'react'

const DesktopMenu = () => {
    return (
        <ul className='hidden md:flex'>
            <li className='py-2 px-5 rounded hover:bg-green-600 hover:text-white hover:shadow-lg'>
                <a className='block' href='#'>Home</a>
            </li>
            <li className='py-2 px-5 rounded hover:bg-green-600 hover:text-white hover:shadow-lg'>
                <a className='block' href='#'>Movies</a>
            </li>
            <li className='py-2 px-5 rounded hover:bg-green-600 hover:text-white hover:shadow-lg'>
                <a className='block' href='#'>Tv Series</a>
            </li>
        </ul>
    )
}

export default DesktopMenu
