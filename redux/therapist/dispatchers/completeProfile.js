/**
 *  ------------------------------------------
 *  Disatcher for completeing profile details
 *  ------------------------------------------
 */

import axios from  '../../../lib/axios.config';
import * as therapistAuthActions from '../actions/therapistAuthAction';
import {setResponseStatus} from '../../application/actions/appAction'

export const completeProfile = (email, form) => {
    return async fetch => {
        fetch(therapistAuthActions.setAuthLoading(true));
        try{
            const resp = await axios(`/therapist/auth-api/create/profile/${email}`, {
                method: 'POST',
                data : {
                    username:form.personal.username,
                    firstname:form.personal.firstname,
                    lastname:form.personal.lastname,
                    phone:form.personal.phone,
                    gender:form.personal.gender,
                    language_proficiency :form.professional.language_proficiency ,
                    education:form.professional.education,
                    therapist_profile:form.professional.therapist_profile,
                    experties:form.professional.experties,
                    spectrum_specialization:form.professional.spectrum_specialization,
                    age_group:form.professional.age_group
                }
            });
            console.log(resp.data);
            fetch(therapistAuthActions.setTherapistUser(resp.data.user));
            fetch(therapistAuthActions.setAlertType(resp.data.alertType));
            fetch(therapistAuthActions.setAuthSuccess(resp.data.message));
            fetch(setResponseStatus(resp.status));
        }catch(e){
            if(e.response && e.response.data){
                console.log(e.response.data)
                fetch(therapistAuthActions.setAlertType('invalid-entity'));
                fetch(therapistAuthActions.setAuthError(e.response.data.errors));
                fetch(setResponseStatus(e.response.status));
            }
        }finally{
            fetch(therapistAuthActions.setAuthLoading(false));
        }
    }
}