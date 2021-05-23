/**
 * ---------------------
 *  therapist auth login
 * ---------------------
 */

import axios from '../../../lib/axios.config';
import * as therapistAuth from '../actions/therapistAuthAction';
import {setResponseStatus} from '../../application/actions/appAction';

// therapist login action
export const loginTherapist = (form) => {
    return async (fetch) => {
        fetch(therapistAuth.setAuthLoading(true));
        try{
            const resp = await axios('/therapist/auth-api/login', {
                method: "POST",
                data: {
                    email: form.email,
                    password: form.password,
                    remember_me: form.remember_me
                }
            });
            fetch(therapistAuth.setTherapistUser(resp.data.user));
            fetch(therapistAuth.setAlertType(resp.data.alertType));
            fetch(therapistAuth.setAuthSuccess(resp.data.message));
            fetch(setResponseStatus(resp.status));
        }catch(e){
            if(e.response){
                if(e.response.data.errors){
                    fetch(therapistAuth.setAuthError(e.response.data.errors));
                }else if(e.response && e.response.data){
                    fetch(therapistAuth.setAlertType(e.response.data.alertType));
                    fetch(therapistAuth.setAuthError(e.response.data.message));
                }
                fetch(setResponseStatus(e.response.status));
            }
        }finally{
            fetch(therapistAuth.setAuthLoading(false));
        }
    }   
}
