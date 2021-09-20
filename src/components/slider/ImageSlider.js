import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { withRouter } from 'react-router';
import Ratings from '../Ratings';

const ImageSlider = ({data, history}) => {

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    const shuffleData = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    };

    // filter data for slider
    const sliderData = data?.filter(item => item.media_type === 'movie')
    const shuffledData = shuffleData(sliderData.slice(0, 7))
    
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const handleClick = (id, media) => {
        history.push(`/details:${id}/media_type?=${media}`)
    };
    
    return (
        <div  className='w-full overflow-hidden z-10' >
            <Slider {...settings}>
                {shuffledData.map((movie) => (
                    <div key={movie.id} class='relative xl:h-screen'>
                        <img className='flex-grow object-cover w-full' src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="slider_image" />
                        <div class='text-gray-200 absolute z-50 bottom-0 left-0 right-0 bg-gray-800 bg-opacity-30 px-5 py-2 md:px-15 md:py-10 overflow-hidden'>
                            <h1 className='font-bold text-xl md:text-3xl mb-3 truncate'>{movie.title || movie.original_name}</h1>
                            <div className='my-3 flex md:block '>
                                <Ratings type={movie.media_type} vote={movie.vote_average} />
                                <button className='md:my-2 border-2 rounded-full py-0.5 px-2 md:py-1 md:px-5 border-green-500 text-green-500 hover:border-0 hover:bg-green-500 hover:text-gray-800 ml-auto ' onClick={() => handleClick(movie.id,movie.media_type)} >Watch Now</button>
                            </div>
                            <p className='line-clamp-2 text-xs md:text-base text-justify'>{movie.overview}</p>
                        </div>
                    </div>
                    )
                )}
            </Slider>
        </div>
    )
};

export default withRouter(ImageSlider);
