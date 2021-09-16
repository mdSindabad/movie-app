import React from 'react'
import {data} from '../../../data'
import Card from '../../Card'

const Home = () => {
    console.log(data.results)
    return (
        <main className='p-5 bg-gray-800 '>
            <h1 className='text-gray-300 text-3xl my-5'>Latest Movies and TvSeries</h1>
            <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {
                data.results.map(movie => {
                    return <Card key={movie.id} movie={movie} />
                })
            }
            </section>
        </main>
    )
}

export default Home
