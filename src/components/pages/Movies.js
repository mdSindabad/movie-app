import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import Card from '../Card'
import Spinner from '../Spinner'
import Error from '../Error'
import Category from '../Category'

const Movie = ({history}) => {
    const initialState = {
        isLoading: true,
        data: {},
        error: ''
    };
    // local state
    const [state, setState] = useState(initialState);
    const [category, setCategory] = useState('popular');
    
    // select options
    const selectItems = [
        {name:'Popular', value:'popular'},
        {name:'Now Playing', value:'now_playing'},
        {name:'Top Rated', value:'top_rated'},
        {name:'Upcoming', value:'upcoming'},
    ];

    // handle category change
    const changeCategory = (e) => {
        setCategory(e.target.value)
        setState({
            isLoading: true,
            data: {},
            error: ''
        })
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
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
    },[category])

    return (
        state.isLoading ? 
            // display spinner
            <Spinner /> :
        state.error ? 
             // display error message
             <Error /> :
        <div className='py-16'>
            <section className='p-5 -mt-2'>
                <div className='flex justify-between'>
                    <h1 className='text-gray-300 text-xl md:text-2xl mb-3 md:m-5'>Movies/ {selectItems.filter(item => item.value === category)[0].name}</h1>
                    <Category category={category} changeCategory={changeCategory} selectItems={selectItems} />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {
                    state.data.results.map(movie => {
                        return movie.poster_path && <Card key={movie.id} media={movie} type='movie' />
                    })
                }
                </div>
            </section>
        </div>
    )
}

export default withRouter(Movie)
