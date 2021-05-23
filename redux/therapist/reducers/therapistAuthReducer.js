/**
 * ---------------------------------
 *  therapist authentication reducer
 *  --------------------------------
 */

import {therapistAuthState} from '../states';
import {HYDRATE} from 'next-redux-wrapper';
import * as types from '../types/therapistAuthTypes';

// therapist auth reducer
const therapistAuthReducer = (state=therapistAuthState, action) => {
    switch (action.type){
        case HYDRATE:
           return { ...state, ...action.payload.therapistAuthReducer}
        case types.SET_THERAPIST_USER:
            return { ...state, user: action.payload}
        case types.SET_THERAPIST_ALERT_TYPE:
            return {...state, alertType: action.payload}
        case types.SET_THERAPIST_LOADING_STATUS:
            return { ...state, loading: action.payload}
        case types.SET_THERAPIST_AUTH_STATUS:
            return { ...state, isLoggedIn: action.payload}
        case types.SET_THERAPIST_AUTH_SUCCESS: 
            return { ...state, error: '', success: action.payload}
        case types.SET_THERAPIST_AUTH_ERROR:
            return { ...state, success: '', error: action.payload}
        default:
            return state
    }
}

export default therapistAuthReducer;