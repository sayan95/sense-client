/**
 * ---------------------------
 *  therapist otp verification
 * --------------------------- 
 */

import axios from '../../../lib/axios.config';
import * as therapistAuth from '../actions/therapistAuthAction';
import {setResponseStatus} from '../../application/actions/appAction';

// verifies otp and activates account 
export const otpverification = (form) => {
    return async (fetch) => {
        fetch(therapistAuth.setAuthLoading(true));
        try{
            const resp = await axios('/therapist/auth-api/auth/verify', {
                method: "POST",
                data : {
                    otp : form.otp 
                }
            });
            fetch(therapistAuth.setTherapistUser(resp.data.user));
            fetch(therapistAuth.setAuthLoggedIn(true));
            fetch(therapistAuth.setAlertType(resp.data.alertType));
            fetch(therapistAuth.setAuthSuccess(resp.data.message));
            fetch(setResponseStatus(resp.status));
        }catch(e){
            if(e.response.data){
                console.log(e.response.data);
                fetch(therapistAuth.setAlertType(e.response.data.alertType));
                fetch(therapistAuth.setAuthError(e.response.data.message));
                fetch(setResponseStatus(e.response.status));
            }
        }finally{
            fetch(therapistAuth.setAuthLoading(false));
        }
    }
} 
