import React, { Fragment } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/home/Home'
import Movies from './components/pages/Movies'
import TvSeries from './components/pages/TvSeries'
import Details from './components/pages/Details'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Switch>
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
                
            </Switch>
        </Fragment>
    )
}

export default App
