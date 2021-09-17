import React from 'react'
import {data} from '../../data'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaStar} from 'react-icons/fa'

const ImageSlider = () => {
    const movies = data.results;
    
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <div  className='box-border w-full overflow-hidden z-10' >
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id} class='relative md:h-screen'>
                        <img className='flex-grow object-cover w-full' src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="slider_image" />
                        <div class='text-gray-200 absolute z-50 bottom-0 left-0 right-0 bg-gray-800 bg-opacity-60 px-5 py-2 md:px-15 md:py-10 overflow-hidden'>
                            <h1 className='font-bold text-xl md:text-3xl mb-3'>{movie.title || movie.original_name}</h1>
                            <div className='my-3 flex md:block '>
                                <div className='flex items-center md:my-3'>
                                    <span className='text-xs border bg-gray-800 bg-opacity-60 border-gray-300 rounded py-0.5 px-2 mr-5 md:text-base'>{movie.media_type}</span>
                                    <FaStar />
                                    <span className='text-xs text-gray-200 rounded px-1 py-0.5 md:text-base'>{movie.vote_average}</span>
                                </div>
                                <button className='md:my-2 border-2 rounded-full py-0.5 px-2 md:py-1 md:px-5 border-green-500 text-green-500 hover:border-0 hover:bg-green-500 hover:text-gray-800 ml-auto '>Watch Now</button>
                            </div>
                            <p className='line-clamp-2 text-xs md:text-base text-justify'>{movie.overview}</p>
                        </div>
                    </div>
                    )
                )}
            </Slider>
        </div>
    )
}

export default ImageSlider
