import axios from 'axios';
import {
    FETCH_HOME_REQUEST,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_FAILURE
} from '../action_types';

const fetch_home_request = () => {
    return {
        type: FETCH_HOME_REQUEST
    }
};
const fetch_home_success = (payload) => {
    return {
        type: FETCH_HOME_SUCCESS,
        payload
    }
};
const fetch_home_failure = (payload) => {
    return {
        type: FETCH_HOME_FAILURE,
        payload
    }
};

export const fetch_home = () => {
    return dispatch => {
        dispatch(fetch_home_request());
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(response => {
            const data = response.data.results;
            dispatch(fetch_home_success(data))
        })
        .catch(err => {
            dispatch(fetch_home_failure(err.message))
        })
    }
}