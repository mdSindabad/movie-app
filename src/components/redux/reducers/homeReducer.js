import {
    FETCH_HOME_REQUEST,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_FAILURE
} from '../action_types';

const initialState = {
    isLoading: true,
    data: {},
    error: ''
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOME_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: {},
                error: ''
            }
        case FETCH_HOME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_HOME_FAILURE:
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

