import React from 'react'
import Navbar from './navbar/Navbar'
import ImageSlider from './slider/ImageSlider'

const Header = () => {
    return (
        <header className='relative overflow-x-hidden'>
            <Navbar />
            <ImageSlider />
        </header>
    )
}

export default Header
