import { get, put, post, delete as del, /*head, options, patch,*/ } from 'axios';

const nciApi = {
    getDws: () => get('/nciApi/DWS'),
    getDwsList: () => get('/nciApi/DWSList'),
    getFarmersList: () => get('/nciapi/farmer/GetFarmersList'),
}

export default nciApi;