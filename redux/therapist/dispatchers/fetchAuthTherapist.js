/**
 * --------------------------------
 *  fetches authenticated therapist
 * --------------------------------
 */

import axios from '../../../lib/axios.config';
import * as therapistAuth from '../actions/therapistAuthAction';
import {setResponseStatus} from '../../application/actions/appAction';

export const fetchAuthTherapist = () => {
    return async fetch => {
        fetch(therapistAuth.setAuthLoading(true));
        try{
            const resp = await axios('/therapist/auth-api/profile', {
                method: 'GET'
            });
            fetch(therapistAuth.setAuthLoggedIn(true));
            fetch(therapistAuth.setTherapistUser(resp.data.user));
            fetch(setResponseStatus(resp.status));
        }catch(e){
            if(e.response.data){
                fetch(setResponseStatus(e.response.status));
            }
        }finally{
            fetch(therapistAuth.setAuthLoading(false));
        } 
    }   
}