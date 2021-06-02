import React, { useEffect } from 'react';
import * as therapistAuthRdux from '../../../../redux/therapist/index';
import redirect from '../../../../lib/redirect_service';
import { useDispatch } from 'react-redux';

// HOC component for authenticated pages
export const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        // dependencies
        const dispatch = useDispatch();
        const {isLoggedIn, user} = props;

        // sync client and server
        useEffect(()=>{
            if(isLoggedIn){
                dispatch(therapistAuthRdux.actions.setTherapistUser(user));
                dispatch(therapistAuthRdux.actions.setAuthLoggedIn(isLoggedIn));
            }
        }, [isLoggedIn]);


        return <WrappedComponent {...props}/>
    } 

    AuthComponent.getInitialProps = async(ctx) => {
        const {store} = ctx;

        // fetching auth therapist data from server
        await store.dispatch(therapistAuthRdux.dispatchers.fetchAuthTherapist(ctx));
        const isLoggedIn = await store.getState().therapistAuth.isLoggedIn;
        const user = await store.getState().therapistAuth.user;

        // redirects to login page if not authenticated
        if(!isLoggedIn){
            redirect(ctx, '/therapist/auth/identity?page=sign-in');
        }
        
        return {user, isLoggedIn}
    }

    return AuthComponent;
}


