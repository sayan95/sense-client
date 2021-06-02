// import all dependencies
import {combineReducers} from 'redux';
import applicationReducer from './application/reducers/applicationReducer';
import therapistAuthReducer from './therapist/reducers/therapistAuthReducer';
import therapistServiceReducer from './application/reducers/therapistServiceReducer';

// combines all application 
const rootReducer = combineReducers({
    app : applicationReducer,
    therapistAuth: therapistAuthReducer,
    therapistService : therapistServiceReducer
});

export default rootReducer;