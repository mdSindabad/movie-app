import React from 'react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    const searchMovie = (e) => {
        e.preventDefault()
    }
    return (
        <nav className='bg-green-500 py-3 px-2 md:px-12 flex items-center justify-between'>
            {/* logo */}
            <div>
                <a className='text-xl lg:text-2xl py-1 px-2 rounded cursor-pointer transition delay-150 duration-200 ease-in-out hover:bg-green-400' href='#'>Movie App</a>
            </div>
            {/* search input */}
            <div>
                <form onSubmit={searchMovie} >
                    <input type='text' placeholder='Search...' className='px-2 py-1 rounded md:w-80' />
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
