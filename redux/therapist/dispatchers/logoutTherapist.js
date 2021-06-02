/**
 * ---------------------------------------------
 *  dispatcher to logout authenticated therapist
 * ---------------------------------------------
 */

import axios from '../../../lib/axios.config';
import * as therapistActions from '../actions/therapistAuthAction';
import {setResponseStatus} from '../../application/actions/appAction';
 
// loogs out auth user
export const logoutTherapist = () => {
    return async (fetch) => {
        fetch(therapistActions.setAuthLoading(true));
        try{    
            const resp = await axios('/therapist/auth-api/logout', {
                method: 'POST'
            });
            fetch(therapistActions.setAlertType(resp.data.alertType));
            fetch(therapistActions.setAuthSuccess(resp.data.message));
            fetch(therapistActions.setAuthLoggedIn(false));
            fetch(setResponseStatus(resp.status));
        }catch(e){
            if(e.response && e.response.data){
                fetch(therapistActions.setAlertType(e.response.data.alertType));
                fetch(therapistActions.setAuthError(e.response.data.message));
                fetch(setResponseStatus(e.response.status));
            }
        }finally{
            fetch(therapistActions.setAuthLoading(false));
        }
    }
}