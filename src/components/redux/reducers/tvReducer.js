import {
    FETCH_TV_REQUEST,
    FETCH_TV_SUCCESS,
    FETCH_TV_FAILURE
} from '../action_types';

const initialState = {
    isLoading: true,
    data: {},
    category: '',
    error: ''
};

export const tvReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TV_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: {},
                category: '',
                error: ''
            }
        case FETCH_TV_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                category: action.category,
                error: ''
            }
        case FETCH_TV_FAILURE:
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

