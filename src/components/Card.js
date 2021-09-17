import React from 'react'
import { withRouter } from 'react-router';

const Card = ({media, type, history}) => {
    const year = (media.first_air_date || media.release_date).split('-')[0];

    const handleClick = () => {
        history.push(`/details:${media.id}/media_type?=${media.media_type || type}`)
    }

    return (
        <div className='text-gray-300 bg-gray-800 bg-opacity-90 rounded overflow-hidden shadow-lg relative cursor-pointer hover:scale-105 transform transition duration-300' onClick={handleClick} >
            <div className=''>
                <img className='' src={`https://image.tmdb.org/t/p/w780${media.poster_path}`} alt={media.original_title || media.original_name} />
            </div>
            <div className='p-2'>
                <h2 className='truncate mb-1 font-medium'>{media.original_title || media.original_name}</h2>
                <div className='flex items-center'>
                    <span className='text-xs '>{year}</span>
                    <span className='text-xs absolute top-0 right-0 bg-red-500 bg-opacity-80 text-gray-200 rounded px-1 py-0.5'>{media.vote_average}</span>
                    <span className='text-xs border border-gray-300 rounded py-0.5 px-2 ml-auto'>{media.media_type || type}</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Card)
