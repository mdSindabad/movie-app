import React from 'react'
import {data} from '../../data'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const images = data.results.map(item => item.backdrop_path);
    
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <div  className='box-border w-full md:h-screen overflow-hidden' >
            <Slider {...settings}>
                {images.map((url) => (
                    <img className='flex-grow object-cover w-full' src={`https://image.tmdb.org/t/p/w1280${url}`} alt="slider_image" />)
                )}
            </Slider>
        </div>
    )
}

export default ImageSlider
