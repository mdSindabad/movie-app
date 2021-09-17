import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import Card from '../Card'
import Spinner from '../Spinner'
import Error from '../Error'

const Search = ({history}) => {
    const initialState = {
        isLoading: true,
        data: {},
        error: ''
    };
    // local state
    const [state, setState] = useState(initialState);

    // extract data from url
    const searchParams = history.location.search.split('=')[1].split(' ').join('-');

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchParams}`)
        .then(response => {
            setState({
                isLoading: false,
                data: response.data,
                error: ''
            })
        })
        .catch(err => {
            setState({
                isLoading: false,
                data: {},
                error: err.message
            })
        })
    },[searchParams])

    return (
        state.isLoading ? 
            // display spinner
            <Spinner /> :
        state.error ? 
             // display error message
             <Error /> :
        <div className='py-16'>
            <section className='p-5 -mt-2'>
                <h1 className='text-gray-300 text-2xl mb-3 md:m-5'><span className='text-gray-500'>Search results for:</span> {searchParams.split('-').join(' ')}</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {
                    state.data.results.map(movie => {
                        return movie.poster_path && <Card key={movie.id} movie={movie} />
                    })
                }
                </div>
            </section>
        </div>
    )
}

export default withRouter(Search)
