import React, { useEffect } from "react";
import * as therapistAuthRedux from "../../../../redux/therapist/index";
import * as appRedux from '../../../../redux/application/index';
import redirect from '../../../../lib/redirect_service';
import { useDispatch } from "react-redux";

// HOC component for guest pages
export const withGuest = (WrappedComponent) => {
  const GuestComponent = (props) => {
    // dependencies
    const dispatch = useDispatch();
    
    // serverside and client sync
    useEffect(()=> {
      if(props.isLoggedIn){                                                             // load store with the auth user
        dispatch(therapistAuthRedux.actions.setTherapistUser(props.user));
        dispatch(therapistAuthRedux.actions.setAuthLoggedIn(props.isLoggedIn));
      }
    }, [props.isLoggedIn]);

    // return the new component
    return <WrappedComponent {...props}/>;
  };

  // server side 
  GuestComponent.getInitialProps = async (ctx) => {
    const { store } = ctx;

    // fetching authTherapist data from  server
    await store.dispatch(therapistAuthRedux.dispatchers.fetchAuthTherapist(ctx));
    const isLoggedIn = await store.getState().therapistAuth.isLoggedIn;
    const user = await store.getState().therapistAuth.user;

    // redirect if logged in
    if(isLoggedIn){
        if(!user.account_status.profile_created){
          redirect(ctx, `/therapist/profile/create`);
        }else{
            redirect(ctx, '/test');
        }
    }

    return {isLoggedIn, user}
  };

  return GuestComponent;
};

