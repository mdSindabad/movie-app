import React from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';
import Card from '../Card';
import Spinner from '../Spinner';
import Error from '../Error';
import { BiError } from 'react-icons/bi';


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
                data.length === 0 ?
                    <div className='h-screen flex justify-center items-center' >
                        <h1 className='px-4 py-2 bg-red-200 text-red-400 inline rounded text-xl flex items-center'>
                            <BiError className='mr-1 text-red-500' />
                            No results found for : <b className='font-bold text-red-500'>{searchParams.split('-').join(' ')}</b></h1>
                    </div> :
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
}

export default withRouter(Search);
