/**
 *  Resends therapist registration otp mail
 */

import axios from '../../../lib/axios.config';
import * as therapistAuth from '../actions/therapistAuthAction';
import {setResponseStatus} from '../../application/actions/appAction';

// Resends therapist otp mail
export const resendOTP = () => {
    return async(fetch) => {
        fetch(therapistAuth.setAuthLoading(true));
        try{
            const resp = await axios("/therapist/auth-api/resend/verify", {
                method : "GET"
            });
            fetch(therapistAuth.setAlertType(resp.data.alertType));
            fetch(therapistAuth.setAuthSuccess(resp.data.message));
            fetch(setResponseStatus(resp.status));
        }catch(e){
            if(e.response && e.response.data){
                fetch(therapistAuth.setAlertType(e.response.data.alertType));
                fetch(therapistAuth.setAuthError(e.response.data.message));
                fetch(setResponseStatus(e.response.status));
            }
        }finally{
            fetch(therapistAuth.setAuthLoading(false));
        }
    }
}

