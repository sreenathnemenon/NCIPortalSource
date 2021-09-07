import { ActionTypes as types } from './actionTypes';
 
import nciApi from '../api/nciApi';
import { getError } from './errorAction';

const apiFarmersList = () => {
    return nciApi.getFarmersList();
}
const getFarmersListRequest = () => {
    return {
        type: types.GET_FARMERS_LIST_REQUEST,
    };
}; 
const getFarmersListSuccess = (resp) => {
    return {
        type: types.GET_FARMERS_LIST_REQUEST_SUCCESS,
        farmersList: resp.data,
    };
};
export const getFarmersList = () => {
    return dispatch => {
        dispatch(getFarmersListRequest());
        return apiFarmersList()
            .then((resp) => {
                dispatch(getFarmersListSuccess(resp));
            })
            .catch(err => {
                const { message } = err;
                dispatch(getError(message));
            });
    };
};