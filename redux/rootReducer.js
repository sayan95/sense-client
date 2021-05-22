// import all dependencies
import {combineReducers} from 'redux';
import applicationReducer from './application/reducers/applicationReducer';

// combines all application 
const rootReducer = combineReducers({
    app : applicationReducer
});

export default rootReducer;