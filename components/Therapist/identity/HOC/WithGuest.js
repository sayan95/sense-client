import React, { useEffect } from "react";
import * as therapistAuthRedux from "../../../../redux/therapist/index";
import * as appRedux from '../../../../redux/application/index';
import redirect from '../../../../lib/redirect_service';

// HOC component for guest pages
export const withGuest = (WrappedComponent) => {
  const GuestComponent = () => {
    // return the new component
    return <WrappedComponent/>;
  };

  // server side 
  GuestComponent.getInitialProps = async (ctx) => {
    const { store } = ctx;

    // fetching authTherapist data from  server
    const isLoggedIn = await store.getState().therapistAuth.isLoggedIn;
    
    if(isLoggedIn){
        if(!user.account_status.profile_created){
            redirect(ctx, `/therapist/profile/create/${user.email}`)
        }else{
            redirect(ctx, '/test');
        }
    }

    return {}
  };

  return GuestComponent;
};

