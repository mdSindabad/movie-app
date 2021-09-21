import axios from 'axios';
import {
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAILURE
} from '../action_types';

const fetch_movie_request = () => {
    return {
        type: FETCH_MOVIE_REQUEST
    }
};
const fetch_movie_success = (payload, category) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload,
        category
    }
};
const fetch_movie_failure = (payload) => {
    return {
        type: FETCH_MOVIE_FAILURE,
        payload
    }
};

export const fetch_movie = (category) => {
    return dispatch => {
        dispatch(fetch_movie_request());
        axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(response => {
                const data = response.data.results;
                dispatch(fetch_movie_success(data, category))
            })
            .catch(err => {
                dispatch(fetch_movie_failure(err.message))
            })
    }
}