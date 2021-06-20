/**
 * --------------------------------
 *  fetches authenticated therapist
 * --------------------------------
 */

import axios from '../../../lib/axios.config';
import * as therapistAuth from '../actions/therapistAuthAction';
import {setResponseStatus} from '../../application/actions/appAction';

export const fetchAuthTherapist = (ctx=null) => {
    return async fetch => {
        fetch(therapistAuth.setAuthLoading(true));
        try{
            const resp = await axios('/therapist/profile-api/profile', {
                method: 'GET',
                headers : ctx && ctx.req.headers.cookie ? 
                    {cookie : ctx.req.headers.cookie} : 
                    {cookie: null}
            });
            fetch(therapistAuth.setAuthLoggedIn(true));
            fetch(therapistAuth.setTherapistUser(resp.data.user));
            fetch(setResponseStatus(resp.status));
        }catch(e){
            if(e.response){
                fetch(setResponseStatus(e.response.status));
            }
        }finally{
            fetch(therapistAuth.setAuthLoading(false));
        } 
    }   
}