import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import Card from '../Card'
import Spinner from '../Spinner'
import Error from '../Error'
import Category from '../Category'

const TvSeries = ({history}) => {
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
        {name:'Top Rated', value:'top_rated'},
        {name:'Airing Today', value:'airing_today'},
        {name:'On The Air', value:'on_the_air'},
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
        axios.get(`https://api.themoviedb.org/3/tv/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
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

    // console.log(state)

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
                    <h1 className='text-gray-300 text-xl md:text-2xl mb-3 md:m-5'>Tv Series/ {selectItems.filter(item => item.value === category)[0].name}</h1>
                    <Category category={category} changeCategory={changeCategory} selectItems={selectItems} />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {
                    state.data.results.map(tv => {
                        return tv.poster_path && <Card key={tv.id} media={tv} type='tv' />
                    })
                }
                </div>
            </section>
        </div>
    )
}

export default withRouter(TvSeries)
