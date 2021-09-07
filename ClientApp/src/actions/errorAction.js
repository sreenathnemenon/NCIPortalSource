import { ActionTypes as types } from './actionTypes';

/**
 * Error action creator
 * @param {*} errorMessage 
 */
export const getError = (errorMessage) => {
    console.log('getError: ', errorMessage);
    return {
        type: types.API_CALL_ERROR,
        hasError: true,
        errorMessage,
    }
};
