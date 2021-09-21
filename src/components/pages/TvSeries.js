import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Spinner from '../Spinner';
import Error from '../Error';
import Category from '../Category';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_tv } from '../redux/action_creators';

const TvSeries = () => {
    // redux store
    const { isLoading, data, category, error } = useSelector(state => state.tv);
    const dispatch = useDispatch();

    // local state
    const [categoryValue, setCategoryValue] = useState(category || 'popular');

    // select options
    const selectItems = [
        { name: 'Popular', value: 'popular' },
        { name: 'Top Rated', value: 'top_rated' },
        { name: 'Airing Today', value: 'airing_today' },
        { name: 'On The Air', value: 'on_the_air' },
    ];

    // handle category change
    const changeCategory = (e) => {
        setCategoryValue(e.target.value)
    };

    useEffect(() => {
        // fetch data first time or on category change
        if (!data.length || category !== categoryValue) {
            dispatch(fetch_tv(categoryValue))
        }
    }, [categoryValue]);

    // console.log(state)

    return (
        isLoading ?
            // display spinner
            <Spinner /> :
            error ?
                // display error message
                <Error /> :
                <div className='pb-16 md:pt-16'>
                    <section className='p-5 -mt-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-gray-300 text-xl md:text-2xl mb-3 md:m-5'>Tv Series/ {selectItems.filter(item => item.value === categoryValue)[0].name}</h1>
                            <Category category={categoryValue} changeCategory={changeCategory} selectItems={selectItems} />
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                            {
                                data.map(tv => {
                                    return tv.poster_path && <Card key={tv.id} media={tv} type='tv' />
                                })
                            }
                        </div>
                    </section>
                </div>
    )
};

export default TvSeries;
