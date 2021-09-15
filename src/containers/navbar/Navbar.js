import React from 'react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { HiSearch } from "react-icons/hi";

const Navbar = () => {
    const searchMovie = (e) => {
        e.preventDefault()
    }
    return (
        <nav className='bg-gray-800 bg-opacity-40 py-3 px-2 md:px-12 flex items-center justify-between absolute w-full z-50'>
            {/* logo */}
            <div>
                <a className='text-xl text-gray-200 lg:text-2xl py-1 px-2 rounded cursor-pointer transition delay-150 duration-200 ease-in-out hover:bg-green-400' href='#'>Movie App</a>
            </div>
            {/* search input */}
            <div>
                <form className="relative" onSubmit={searchMovie} >
                    <HiSearch className="absolute top-50 transform ml-1 translate-y-1/3 text-lg text-gray-500" />
                    <input type='text' placeholder='Search...' className='px-6 py-1 rounded md:w-80 bg-transparent border border-gray-500 focus:outline-none' />
                </form>
            </div>
            {/* menu */}
            <div>
                <MobileMenu />
                <DesktopMenu />
            </div>
        </nav>
    )
}

export default Navbar
