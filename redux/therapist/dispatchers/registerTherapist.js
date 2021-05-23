/**
 *   Therapist auth related dispatchers
 *   handles assync api calls
 */

import axios from '../../../lib/axios.config';
import * as therapistAuth from '../actions/therapistAuthAction';
import {setResponseStatus} from '../../application/actions/appAction';

// register basic auth details of therapist
export const registerTherapist = (form) => {
    return async (fetch) => {
        try{
            fetch(therapistAuth.setAuthLoading(true));
            const resp = await axios('/therapist/auth-api/register', {
                method: 'POST',
                data: {
                    email: form.email,
                    password: form.password,
                    password_confirmation: form.password_confirmation
                }
            });
            fetch(therapistAuth.setAlertType(resp.data.alertType));
            fetch(therapistAuth.setAuthSuccess(resp.data.message));
            fetch(setResponseStatus(resp.status));
        }catch(e) {
            if(e.response.data){
                fetch(therapistAuth.setAuthError(e.response.data.errors));
                fetch(setResponseStatus(e.response.status));
            }
        }finally{
            fetch(therapistAuth.setAuthLoading(false));
        }
    }
}