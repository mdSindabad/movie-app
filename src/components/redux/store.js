import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer, searchReducer } from './reducers';
import { movieReducer } from './reducers/movieReducer';

const rootReducer = combineReducers({
    home: homeReducer,
    movie: movieReducer,
    search: searchReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

