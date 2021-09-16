import React, { Fragment } from 'react'
import Navbar from './containers/navbar/Navbar'
import Home from './containers/pages/home/Home'

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Home />
        </Fragment>
    )
}

export default App
