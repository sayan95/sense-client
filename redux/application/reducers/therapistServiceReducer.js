/**
 * ---------------------------
 *  therapist service  reducer
 * ---------------------------
 */

import {therapistServiceDataState} from '../state';
import {HYDRATE} from 'next-redux-wrapper';
import * as therapistServiceTypes from '../types/therapistServiceTypes';

const therapistServiceReducer = (state = therapistServiceDataState , action) => {
    switch(action.type){
        case HYDRATE:
            return { ...state, ...action.payload.therapistServiceReducer}
        case therapistServiceTypes.SET_LANGUAGES:
            return { ...state, languages: action.payload }
        case therapistServiceTypes.SET_DEGREES:
            return { ...state, degrees: action.payload}
        case therapistServiceTypes.SET_AGE_GROUPS:
            return { ...state, ageGroups: action.payload}
        case therapistServiceTypes.SET_EXPERTIES:
            return { ...state, experties: action.payload}
        case therapistServiceTypes.SET_SPECIALIZATION: 
            return { ...state, specializations: action.payload}
        case therapistServiceTypes.SET_THERAPY_PROFILE:
            return { ... state, therapyProfiles: action.payload}
        default:
            return state;
    }
 }

 export default therapistServiceReducer;