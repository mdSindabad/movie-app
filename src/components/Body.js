import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Details from './pages/Details';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const Body = () => {
    return (
        <main className='bg-gray-700'>
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
                <Route path='/search'>
                    <Search />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}

export default Body;
