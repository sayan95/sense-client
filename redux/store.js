import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// bind middlewares
const bindMiddleware = middleware => {
    if(process.env.NODE_ENV !== 'production'){
        const { composeWithDevTools } = require("redux-devtools-extension")
        return composeWithDevTools(applyMiddleware(...middleware));
    }   
    return applyMiddleware(...middleware)
}

// initialize store
const initStore = (initialState) => {
    return createStore(rootReducer, initialState, bindMiddleware([thunk]))
}

// wrap the store and attch new store instance with each request
export const wrapper = createWrapper(initStore)