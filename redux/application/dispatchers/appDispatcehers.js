/**
 * ----------------------------------------------
 *  Dispatchers for application
 * -----------------------------------------------
 */
import axios from '../../../lib/axios.config';
import * as actions from '../actions/appAction';

// 1. load application settings details
export const loadAppSettings = () => {
    return async (fetch) => {
        try{
            const res = await axios.get('app/service-api/settings/info');
            fetch(actions.setSettingsInfo(res.data));
            fetch(actions.setResponseStatus(res.status));
        }catch(error){
            if(error.response.data){
                fetch(actions.setResponseStatus(error.response.status));
            }
        }
    }
}

