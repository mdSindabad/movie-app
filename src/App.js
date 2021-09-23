import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import store from './components/redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Navbar />
            <Body />
            <Footer />
        </Provider>
    )
}

export default App;
