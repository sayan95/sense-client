/**
 *  action creators for therapist auth types
 */
import * as types from '../types/therapistAuthTypes';

// set actions
export const setTherapistUser = user => { return { type: types.SET_THERAPIST_USER, payload: user} }
export const setAuthLoading = status => { return { type: types.SET_THERAPIST_LOADING_STATUS, payload: status} }
export const setAuthLoggedIn = status => { return { type: types.SET_THERAPIST_AUTH_STATUS, payload: status}  }
export const setAuthSuccess = success => { return { type: types.SET_THERAPIST_AUTH_SUCCESS, payload: success} }
export const setAuthError = error => { return { type: types.SET_THERAPIST_AUTH_ERROR, payload: error} }