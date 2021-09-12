import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    return (
        <nav className='bg-green-500 py-3 px-5 flex items-center justify-between'>
            <div>
                <a className='text-2xl py-1 px-2 rounded cursor-pointer transition delay-150 duration-200 ease-in-out hover:bg-green-400' href='#'>Movie App</a>
            </div>
            <div>
                <form>
                    <input type='text' placeholder='Search' className='px-2 py-1 rounded' />
                </form>
            </div>
            <div className=''>
                {/* hamburger menu */}
                <MobileMenu />
                {/* desktop menu */}
                
            </div>
        </nav>
    )
}

export default Navbar
