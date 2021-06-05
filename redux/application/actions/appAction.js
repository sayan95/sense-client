/**
 *  action creator for application level types
 */

import * as appTypes from '../types/appType'; 

// set actions
export const setPageMode = mode => {return { type: appTypes.SET_PAGE_MODE, payload: mode} }
export const setPageSubject = subject => {return {type: appTypes.SET_PAGE_SUBJECT, payload: subject}}
export const setPageLoading = status => {return { type: appTypes.SET_PAGE_LOADING, payload: status} }
export const setSettingsInfo = settings => {return { type: appTypes.SET_APP_SETTINGS_INFO, payload: settings} }
export const setResponseStatus = responseStatus => {return { type: appTypes.SET_RESPOSNE_STATUS, payload: responseStatus} }
export const setAlertType = alert => {return { type: appTypes.SET_APP_ALERT, payload: alert}}
export const setAppSuccess = success => {return { type: appTypes.SET_APP_SUCCESS, payload: success}}
export const setAppError = error => {return { type: appTypes.SET_APP_ERROR, payload: error}}