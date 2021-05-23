// import all dependencies
import {combineReducers} from 'redux';
import applicationReducer from './application/reducers/applicationReducer';
import therapistAuthReducer from './therapist/reducers/therapistAuthReducer';

// combines all application 
const rootReducer = combineReducers({
    app : applicationReducer,
    therapistAuth: therapistAuthReducer
});

export default rootReducer;