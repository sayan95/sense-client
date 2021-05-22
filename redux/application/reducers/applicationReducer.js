/**
 * --------------------
 *  application reducer
 * --------------------
 */

import {applicationState} from '../state';
import {HYDRATE} from 'next-redux-wrapper';
import * as appTypes from '../types/appType';

// the appliaction reducer
const applicationReducer = (state = applicationState , action) => {
    switch(action.type){
        case HYDRATE:
            return { ...state, ...action.payload.applicationReducer}
        case appTypes.SET_PAGE_MODE:
            return { ...state, pageMode: action.payload}
        case appTypes.SET_PAGE_LOADING:
            return { ...state, pageLoading: action.payload}
        case appTypes.SET_APP_SETTINGS_INFO:
            return { ...state, settings: action.payload}
        case appTypes.SET_RESPOSNE_STATUS:
            return { ...state, responseStatus: action.payload}
        case appTypes.SET_APP_ALERT:
            return { ...state, alertType: action.payload}
        case appTypes.SET_APP_SUCCESS:
            return { ...state, error:'', success: action.payload}
        case appTypes.SET_APP_ERROR:
            return { ...state, success:'', error: action.payload}
        default:
            return state;
    }
}

export default applicationReducer;
