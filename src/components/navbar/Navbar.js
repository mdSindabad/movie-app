import React, { useState } from 'react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { HiSearch } from "react-icons/hi";
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetch_search } from '../redux/action_creators';


const Navbar = ({ history }) => {
    // redux dispatch
    const dispatch = useDispatch();
    // local state
    const [searchParams, setSearchParams] = useState('');

    const searchMovie = (e) => {
        e.preventDefault()
        dispatch(fetch_search(searchParams));
        history.push(`/search/?q=${searchParams}`)
        setSearchParams('')
    }
    return (
        <nav className='bg-gray-800 py-3 px-2 md:px-12 flex items-center justify-between w-full z-50 md:fixed md:bg-opacity-80'>
            {/* logo */}
            <div>
                <Link className='text-base text-gray-300 lg:text-2xl text-xl py-1 px-2 rounded cursor-pointer hover:text-green-500 transition duration-300' to='/'>MediaHub</Link>
            </div>
            {/* search input */}
            <div className=''>
                <form className="relative w-4/5 md:w-96 ml-auto" onSubmit={searchMovie} >
                    <HiSearch className="absolute top-50 transform ml-1 translate-y-1/3 text-lg text-gray-300" />
                    <input value={searchParams} onChange={(e) => setSearchParams(e.target.value)} type='text' placeholder='Search...' className='px-6 py-1 rounded w-full bg-transparent border border-gray-300 text-gray-300 focus:outline-none' />
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

export default withRouter(Navbar)
