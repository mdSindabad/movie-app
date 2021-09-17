import React from 'react'
import { withRouter } from 'react-router';

const Card = ({movie, history}) => {
    const year = (movie.first_air_date || movie.release_date).split('-')[0];

    const handleClick = () => {
        history.push(`/details:${movie.id}/media_type?=${movie.media_type}`)
    }

    return (
        <div className='text-gray-300 bg-gray-700 bg-opacity-90 rounded overflow-hidden shadow-lg relative cursor-pointer hover:scale-105 transform transition duration-300' onClick={handleClick} >
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

export default withRouter(Card)