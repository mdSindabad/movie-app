import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import Spinner from '../Spinner';
import Error from '../Error';
import Category from '../Category';
import { fetch_movie } from '../redux/action_creators';

const Movie = () => {
    // redux store
    const { isLoading, data, category, error } = useSelector(state => state.movie);
    const dispatch = useDispatch();

    // local state
    const [categoryValue, setCategoryValue] = useState(category || 'popular');

    // select options
    const selectItems = [
        { name: 'Popular', value: 'popular' },
        { name: 'Now Playing', value: 'now_playing' },
        { name: 'Top Rated', value: 'top_rated' },
        { name: 'Upcoming', value: 'upcoming' },
    ];

    // handle category change
    const changeCategory = (e) => {
        setCategoryValue(e.target.value)
    };

    useEffect(() => {
        // fetch data first time or on category change
        if (!data.length || category !== categoryValue) {
            dispatch(fetch_movie(categoryValue))
        }
    }, [categoryValue]);

    return (
        isLoading ?
            // display spinner
            <Spinner /> :
            error ?
                // display error message
                <Error /> :
                <div className='py-16'>
                    <section className='p-5 -mt-2'>
                        <div className='flex justify-between'>
                            <h1 className='text-gray-300 text-xl md:text-2xl mb-3 md:m-5'>Movies/ {selectItems.filter(item => item.value === categoryValue)[0].name}</h1>
                            <Category category={categoryValue} changeCategory={changeCategory} selectItems={selectItems} />
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                            {
                                data.map(movie => {
                                    return movie.poster_path && <Card key={movie.id} media={movie} type='movie' />
                                })
                            }
                        </div>
                    </section>
                </div>
    )
};

export default Movie;
