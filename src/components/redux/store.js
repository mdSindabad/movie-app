import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer, movieReducer, tvReducer, searchReducer } from './reducers';

const rootReducer = combineReducers({
    home: homeReducer,
    movie: movieReducer,
    tv: tvReducer,
    search: searchReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

