/**
 * --------------------------------------------
 *  action creators for therapist service types
 * --------------------------------------------
 */

import * as therapistServiceTypes from '../types/therapistServiceTypes';

 export const setLanguages = (languages) => {
    return { type: therapistServiceTypes.SET_LANGUAGES, payload: languages}
} 
export const setDegrees = (degrees) => {
    return { type: therapistServiceTypes.SET_DEGREES, payload: degrees}
}
export const setAgeGroups = (ageGroups) => {
    return { type: therapistServiceTypes.SET_AGE_GROUPS, payload: ageGroups}
}
export const setTherapyProfiles = (therapyProfiles) => {
    return { type: therapistServiceTypes.SET_THERAPY_PROFILE, payload: therapyProfiles}
}
export const setExperties = (experties) => {
    return { type: therapistServiceTypes.SET_EXPERTIES, payload: experties}
}
export const setSpecializations = (specializations) => {
    return { type: therapistServiceTypes.SET_SPECIALIZATION, payload: specializations}
}