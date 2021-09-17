import React from 'react'
import Home from './pages/home/Home'
import Movies from './pages/Movies'
import TvSeries from './pages/TvSeries'
import Details from './pages/Details'
import { Switch, Route } from 'react-router-dom'

const Body = () => {
    return (
        <Switch>
            <main className='pb-5 bg-gray-700'>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/movies'>
                    <Movies />
                </Route>
                <Route path='/tv-series'>
                    <TvSeries />
                </Route>
                <Route path='/details:id'>
                    <Details />
                </Route>
            </main>
        </Switch>
    )
}

export default Body
