import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const MobileMenuItems = ({ handleClick, history }) => {
    // check the page
    const path = history.location.pathname;
    const homePage = path === '/' ? true : false;
    const moviePage = path === '/movies' ? true : false;
    const tvPage = path === '/tv-series' ? true : false;


    return (
        <ul className='absolute w-32 top-14 right-0 py-2 z-50'>
            <li className={`py-2 pl-5 rounded m-1 bg-black text-gray-300 shadow-lg ${homePage && 'bg-green-500 text-gray-800 bg-opacity-80'}`}>
                <Link onClick={handleClick} className='block' to='/'>Home</Link>
            </li>
            <li className={`py-2 pl-5 rounded m-1 bg-black text-gray-300 shadow-lg ${moviePage && 'bg-green-500 text-gray-800 bg-opacity-80'}`}>
                <Link onClick={handleClick} className='block' to='/movies'>Movies</Link>
            </li>
            <li className={`py-2 pl-5 rounded m-1 bg-black text-gray-300 shadow-lg ${tvPage && 'bg-green-500 text-gray-800 bg-opacity-80'}`}>
                <Link onClick={handleClick} className='block' to='/tv-series'>Tv Series</Link>
            </li>
        </ul>
    )
}

export default withRouter(MobileMenuItems)
