import React from 'react'

const DesktopMenu = () => {
    return (
        <ul className='hidden md:flex'>
            <li className='py-2 px-5 rounded text-gray-300 hover:border-gray-400 border-transparent border-2 hover:border-current'>
                <a className='block' href='#'>Home</a>
            </li>
            <li className='py-2 px-5 rounded text-gray-300 ml-2 hover:border-gray-400 border-transparent border-2 hover:border-current'>
                <a className='block' href='#'>Movies</a>
            </li>
            <li className='py-2 px-5 rounded text-gray-300 ml-2 hover:border-gray-400 border-transparent border-2 hover:border-current'>
                <a className='block' href='#'>Tv Series</a>
            </li>
        </ul>
    )
}

export default DesktopMenu
