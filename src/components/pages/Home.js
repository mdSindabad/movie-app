import React, {useEffect} from 'react';
import Card from '../Card';
import ImageSlider from '../slider/ImageSlider';
import Spinner from '../Spinner';
import Error from '../Error';
import {useSelector, useDispatch} from 'react-redux';
import { fetch_home } from '../redux/action_creators';


const Home = () => {
    // redux store
    const {isLoading, data, error} = useSelector(state => state.home);
    const dispatch = useDispatch();

    useEffect(() => {
        // fetch data if store is empty
        if(isLoading) {
            dispatch(fetch_home())
        }
    },[]);


    return (
        isLoading ? 
            // display spinner
            <Spinner /> :
        error ? 
             // display error message
             <Error /> :
        <div className='pb-16'>
            <ImageSlider data={data}/>
            <section className='p-5 -mt-2'>
                <h1 className='text-gray-300 text-3xl mb-3 md:m-5'>Latest Movies and TvSeries</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {
                    data.map(media => {
                        return media.poster_path && <Card key={media.id} media={media} />
                    })
                }
                </div>
            </section>
        </div>
    )
};

export default Home;
