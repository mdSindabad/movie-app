import React from 'react'

const Card = ({movie}) => {
    const year = (movie.first_air_date || movie.release_date).split('-')[0];
    return (
        <div className='text-gray-300 bg-black rounded overflow-hidden shadow-lg relative cursor-pointer hover:scale-105 transform transition duration-300' >
            <div className=''>
                <img className='' src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.original_title || movie.original_name} />
            </div>
            <div className='p-2'>
                <h2 className='truncate mb-1 font-medium'>{movie.original_title || movie.original_name}</h2>
                <div className='flex items-center'>
                    <span className='text-xs '>{year}</span>
                    <span className='text-xs absolute top-0 right-0 bg-red-500 bg-opacity-80 text-gray-200 rounded px-1 py-0.5'>{movie.vote_average}</span>
                    <span className='text-xs border border-gray-300 rounded py-0.5 px-2 ml-auto'>{movie.media_type}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
