import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Ratings from '../Ratings';
import Spinner from '../Spinner';
import Error from '../Error';

const Details = (props) => {
    // initial state
    const initialState = {
        isLoading: true,
        media:{},
        error: ''
    };
    // local state
    const [data, setData] = useState(initialState);

    // extract data from url
    const media_type = props.location.search.split('=')[1];
    const id = props.match.url.split(':')[1];

    // youtube video id
    const [videoId, setVideoid] = useState('');

    // destructuring movie data
    const {poster_path, title, original_name, vote_average, overview, production_countries, first_air_date, release_date, genres} = data.media;

    // get genres
    const getGenres = () => genres.map(item => item.name);

    useEffect(() => {
        // fetch video youtube id
        axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(response => {
            // console.log(response)
            const obj = response.data.results.filter(item => {
                const name = item.name;
                return name.includes('Trailer') && item.site === 'YouTube';
            })[0];
            setVideoid(obj.key)
        })
        .catch(err => console.log(err));

        // fetch movie data
        axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(response => {
            setData({
            isLoading: false,
            media: response.data,
            error: ''
            }
        )})
        .catch(err => {
            setData({
                isLoading: false,
                media: {},
                error: err.message
                })
            })
    },[id]);
 
    return (
        data.isLoading ? 
            // display spinner
            <Spinner /> :
            data.error ? 
             // display error message
             <Error /> :
            // display data
            <div className='md:grid md:grid-cols-2 md:h-screen py-16 md:pt-0 md:items-center'>
                {/* details section */}
                <section className='md:grid md:grid-cols-3 px-3 md:px-5 my-3 md:my-0'>
                    <div className='col-span-1 rounded overflow-hidden  md:block w-11/12 mx-auto'>
                        <img className='rounded' src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt={title || original_name} />
                    </div>
                    <div className='col-span-2 text-gray-300 md:ml-3'>
                        <h2 className='font-bold text-2xl my-3 md:my-0'>{title || original_name}</h2>
                        <Ratings type={media_type} vote={vote_average} />
                        <p className='text-justify my-2 text-sm'>{overview}</p>
                        <p className='my-2 text-sm mt-1'><span className='text-gray-400 mr-3'>Country:</span> {production_countries[production_countries.length - 1]?.name || 'Not Available'}</p>
                        <p className='my-2 text-sm mt-1'><span className='text-gray-400 mr-3'>Genre:</span> {
                            getGenres().join(', ')
                        }</p>
                        <p className='my-2 text-sm mt-1'><span className='text-gray-400 mr-3'>{media_type === 'movie'? 'Release:' : 'First Air:'}</span> {first_air_date || release_date}</p>
                    </div>
                </section>
                {/* trailer section */}
                <section className='flex justify-center w-full '>
                    <iframe width="480" height="320" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                </section>
            </div>    
        
    )
    
};

export default withRouter(Details);
