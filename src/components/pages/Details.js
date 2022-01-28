import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Ratings from '../Ratings';
import Spinner from '../Spinner';
import Error from '../Error';

const Details = (props) => {
    // react-router hook
    const location = useLocation();

    // initial state
    const initialState = {
        isLoading: true,
        media: {},
        error: ''
    };
    // local state
    const [data, setData] = useState(initialState);
    const [season, setSeason] = useState(1);
    const [episode, setEpisode] = useState(1);
    const [url, setUrl] = useState('');

    // extract data from url
    const media_type = location.search.split('=')[1];
    const id = location.pathname.split(':')[1].split('/')[0];

    // youtube video id
    const [videoId, setVideoid] = useState('');

    // destructuring movie data
    const { poster_path, title, original_name, vote_average, overview, production_countries, first_air_date, release_date, genres, number_of_episodes, number_of_seasons } = data.media;


    // get genres
    const getGenres = () => genres.map(item => item.name);

    //update url
    const upDateUrl = (urlLink) => {
        setTimeout(() => {
            setUrl(urlLink)
        }, 2000)
    }

    useEffect(() => {
        // fetch video youtube id
        axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then(response => {
                const obj = response.data.results.filter(item => {
                    const name = item.name;
                    return name.includes('Trailer') && item.site === 'YouTube';
                })[0];
                // get video if available
                if (obj) {
                    setVideoid(obj.key)
                }
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
                )
            })
            .catch(err => {
                setData({
                    isLoading: false,
                    media: {},
                    error: err.message
                })
            })
    }, [id]);

    useEffect(() => {
        // set title
        if (title || original_name) {
            document.title = `MediaHub | ${title || original_name}`;
        }
    }, [data])

    return (
        data.isLoading ?
            // display spinner
            <Spinner /> :
            data.error ?
                // display error message
                <Error /> :
                // display data
                <div className='pt-2 md:pt-24 md:pt-0 md:h-screen '>
                    <h4 className='text-center text-red-500'>Reload the page if doesnt work on first try.</h4>
                    <div className='lg:grid lg:grid-cols-2 pb-16 '>
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
                                <p className='my-2 text-sm mt-1'><span className='text-gray-400 mr-3'>{media_type === 'movie' ? 'Release:' : 'First Air:'}</span> {first_air_date || release_date}</p>
                                {
                                    media_type !== 'movie' && (
                                        <>
                                            <p className='my-2 text-sm mt-1'><span className='text-gray-400 mr-3'>Seasons: </span> {number_of_seasons}</p>
                                            <p className='my-2 text-sm mt-1'><span className='text-gray-400 mr-3'>Episodes: </span> {number_of_episodes}</p>
                                        </>
                                    )
                                }
                            </div>
                        </section>
                        {/* trailer section */}
                        <section className='flex justify-center w-full md:mt-8 lg:mt-0'>
                            <iframe width="480" height="320" src={url || `https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </section>
                        {/* full movie/ tv series section */}
                        <section className='flex justify-center mt-4'>
                            <div>
                                <div className='mb-2 mr-2'>
                                    {media_type !== 'movie' && (
                                        <>
                                            <select className='mr-2 rounded px-2 py-1' onChange={(e) => setSeason(e.target.value)} value={season}>
                                                {
                                                    data.media.seasons.map((season, index) => {
                                                        if (data.media.seasons.length > index + 1) {
                                                            return (
                                                                <option value={index + 1}>Season-{index + 1}</option>
                                                            )
                                                        }
                                                    })
                                                }
                                            </select>
                                            <select className='rounded px-2 py-1' onChange={(e) => setEpisode(e.target.value)} value={episode}>
                                                {
                                                    Array.apply(null, Array(data.media.seasons[data.media.seasons.length > 1 ? season : 0].episode_count)).map((episode, index) => (
                                                        data.media.seasons.length === 0 ?
                                                            <option value={1}>Episode-1</option> :
                                                            <option value={index + 1}>Episode-{index + 1}</option>

                                                    ))
                                                }
                                            </select>
                                        </>
                                    )}
                                </div>
                                <div className='flex justify-center text-white'>
                                    {media_type === 'movie' ?
                                        <button onClick={() => upDateUrl(`https://api.123movie.cc/imdb.php?imdb=${data.media.imdb_id}&server=vcu`)} className='bg-blue-600 py-1 px-3 rounded hover:bg-blue-500'><a href={`https://api.123movie.cc/imdb.php?imdb=${data.media.imdb_id}&server=vcu`} target="_blank">Watch Full Movie</a></button> :
                                        <button onClick={() => setUrl(`https://api.123movie.cc/tmdb_api.php?se=${season}&ep=${episode}&tmdb=${data.media.id}&server_name=vcu`)} className='bg-blue-600 py-1 px-3 rounded hover:bg-blue-500'><a href={`https://api.123movie.cc/tmdb_api.php?se=${season}&ep=${episode}&tmdb=${data.media.id}&server_name=vcu`} target="_blank">Watch Full Episode</a></button>
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

    )

}

export default Details;
