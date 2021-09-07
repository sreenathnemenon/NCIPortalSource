import { produce } from 'immer';
import { ActionTypes as types } from '../actions/actionTypes';

const initialState = {
    farmersList: [],
    isLoading: false
};
 
 export const reducer = produce((state, action) => {

    state = state || initialState;

    if (action.type === types.GET_FARMERS_LIST_REQUEST) {
        return {
            ...initialState,
            isLoading: true
        };
    }
    else if (action.type === types.GET_FARMERS_LIST_REQUEST_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            farmersList: action.farmersList
        };
    }

    return state;
}, initialState);

 