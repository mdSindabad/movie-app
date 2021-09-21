import axios from 'axios';
import {
    FETCH_TV_REQUEST,
    FETCH_TV_SUCCESS,
    FETCH_TV_FAILURE
} from '../action_types';

const fetch_tv_request = () => {
    return {
        type: FETCH_TV_REQUEST
    }
};
const fetch_tv_success = (payload, category) => {
    return {
        type: FETCH_TV_SUCCESS,
        payload,
        category
    }
};
const fetch_tv_failure = (payload) => {
    return {
        type: FETCH_TV_FAILURE,
        payload
    }
};

export const fetch_tv = (category) => {
    return dispatch => {
        dispatch(fetch_tv_request());
        axios.get(`https://api.themoviedb.org/3/tv/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(response => {
                const data = response.data.results;
                dispatch(fetch_tv_success(data, category))
            })
            .catch(err => {
                dispatch(fetch_tv_failure(err.message))
            })
    }
}