import { ActionTypes as types } from './actionTypes';

import nciApi from '../api/nciApi';
import { getError } from './errorAction';
 
const apiGetDwsList = () => {
    return nciApi.getDwsList();
}
const getDwsListRequest = () => {
    return {
        type: types.GET_DWS_LIST_REQUEST,
    };
};
const getDwsListSuccess = (resp) => {
    return {
        type: types.GET_DWS_LIST_SUCCESS,
        countryList: resp.data,
    };
};
export const getDwsList = () => {
    return dispatch => {
        dispatch(getDwsListRequest());
        return apiGetDwsList()
            .then((resp) => {
                dispatch(getDwsListSuccess(resp));
            })
            .catch(err => {
                const { message } = err;
                dispatch(getError(message));
            });
    };
};