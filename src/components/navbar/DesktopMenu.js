import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const DesktopMenu = ({ history }) => {
    // check the page
    const path = history.location.pathname;
    const homePage = path === '/' ? true : false;
    const moviePage = path === '/movies' ? true : false;
    const tvPage = path === '/tv-series' ? true : false;

    return (
        <ul className='hidden lg:flex'>
            <li className={`mx-0.5 py-2 px-5 rounded text-gray-300 hover:border-green-500 border-transparent border-2 hover:border-current ${homePage && 'bg-green-500 border-0 text-gray-800 bg-opacity-80'}`}>
                <Link className='block' to='/'>Home</Link>
            </li>
            <li className={`mx-0.5 py-2 px-5 rounded text-gray-300 hover:border-green-500 border-transparent border-2 hover:border-current ${moviePage && 'bg-green-500 border-0 text-gray-800 bg-opacity-80'}`}>
                <Link className='block' to='/movies'>Movies</Link>
            </li>
            <li className={`mx-0.5 py-2 px-5 rounded text-gray-300 hover:border-green-500 border-transparent border-2 hover:border-current ${tvPage && 'bg-green-500 border-0 text-gray-800 bg-opacity-80'}`}>
                <Link className='block' to='/tv-series'>Tv Series</Link>
            </li>
        </ul>
    )
}

export default withRouter(DesktopMenu)
