import React from 'react'
import {data} from '../../../data'
import Card from '../../Card'
import ImageSlider from '../../slider/ImageSlider'

const Home = () => {
    return (
        <section >
            <ImageSlider />
            <div className='p-5 -mt-2'>
                <h1 className='text-gray-300 text-3xl mb-3 md:m-5'>Latest Movies and TvSeries</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {
                    data.results.map(movie => {
                        return <Card key={movie.id} movie={movie} />
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Home
