/**
 * --------------------------------------------------------
 *  action creator for fetching all therapist service datas 
 * --------------------------------------------------------
 */
import axios from '../../../lib/axios.config';
import  * as therapistDataServiceActions from './../actions/therapistServiceAction';

export const therapistServiceDataDispatcher = () => {
    return async (fetch) => {
        try{
            const resp = await axios('/app/service-api/service/therapist',{
                method : 'GET'
            });
            fetch(therapistDataServiceActions.setLanguages(resp.data.languages));
            fetch(therapistDataServiceActions.setDegrees(resp.data.degrees));
            fetch(therapistDataServiceActions.setAgeGroups(resp.data.ageGroups));
            fetch(therapistDataServiceActions.setExperties(resp.data.experties));
            fetch(therapistDataServiceActions.setTherapyProfiles(resp.data.therapyProfiles));
            fetch(therapistDataServiceActions.setSpecializations(resp.data.specializations));
        }catch(error){
            if(error && error.response && error.response.data){
                console.log(error.response.data)
            }
        }
    }
}  