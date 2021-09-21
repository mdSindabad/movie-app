import {
    FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE
} from '../action_types';

const initialState = {
    isLoading: true,
    data: {},
    error: ''
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: {},
                error: ''
            }
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_SEARCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: {},
                error: action.payload
            }

        default:
            return state
    }
}

