import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer, searchReducer } from './reducers';

const rootReducer = combineReducers({
    home: homeReducer,
    search: searchReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

