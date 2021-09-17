import React, { Fragment } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Body />
            <Footer />
        </Fragment>
    )
}

export default App
