import {
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAILURE
} from '../action_types';

const initialState = {
    isLoading: true,
    data: {},
    category: '',
    error: ''
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: {},
                category: '',
                error: ''
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                category: action.category,
                error: ''
            }
        case FETCH_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: {},
                category: '',
                error: action.payload
            }

        default:
            return state
    }
}

