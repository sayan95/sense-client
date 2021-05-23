/**
 * ----------------------------------------------
 *  Dispatchers for application
 * -----------------------------------------------
 */
import axios from '../../../lib/axios.config';
import * as app from '../actions/appAction';

// 1. load application settings details
export const loadAppSettings = () => {
    return async (fetch) => {
        try{
            const res = await axios.get('app/service-api/settings/info');
            fetch(app.setSettingsInfo(res.data));
            fetch(app.setResponseStatus(res.status));
        }catch(error){
            if(error.response.data){
                fetch(app.setResponseStatus(error.response.status));
            }
        }
    }
}

