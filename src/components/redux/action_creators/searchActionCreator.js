import axios from 'axios';
import {
    FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE
} from '../action_types';

const fetch_search_request = () => {
    return {
        type: FETCH_SEARCH_REQUEST
    }
};
const fetch_search_success = (payload) => {
    return {
        type: FETCH_SEARCH_SUCCESS,
        payload
    }
};
const fetch_search_failure = (payload) => {
    return {
        type: FETCH_SEARCH_FAILURE,
        payload
    }
};

export const fetch_search = (queryString) => {
    return dispatch => {
        dispatch(fetch_search_request());
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${queryString}`)
            .then(response => {
                const data = response.data.results;
                dispatch(fetch_search_success(data))
            })
            .catch(err => {
                dispatch(fetch_search_failure(err.message))
            })
    }
};