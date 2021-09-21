import React from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';
import Card from '../Card';
import Spinner from '../Spinner';
import Error from '../Error';


const Search = ({ history }) => {
    // redux store
    const { isLoading, data, error } = useSelector(state => state.search);

    // extract data from url
    const searchParams = history.location.search.split('=')[1].split(' ').join('-');

    return (
        isLoading ?
            // display spinner
            <Spinner /> :
            error ?
                // display error message
                <Error /> :
                <div className='pb-16 md:pt-16'>
                    <section className='p-5 -mt-2'>
                        <h1 className='text-gray-300 text-xl md:text-2xl mb-3 md:m-5'><span className='text-gray-500'>Results for:</span> {searchParams.split('-').join(' ')}</h1>
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

export default withRouter(Search);
