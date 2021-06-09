// dependency imports
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as appRedux from '../../../redux/application/index';
import {withAuth} from '../../../components/Therapist/identity/HOC/withAuth';
import {withTherapistDashboard} from '../../../components/Therapist/workArea/HOC/DashboardHoc';

// component imports
import Loader from '../../../components/UI/Loader/Loader';
import MainContent from '../../../components/Therapist/workArea/MainContent/MainContent';
import TherapistLayout from '../../../layouts/TherapistLayout';
import Home from '../../../components/Therapist/workArea/Home/Home';

// therapist work area
const index = () => {
    // dependency
    const dispatch = useDispatch();
    //states from store 
    const pageLoading = useSelector(state => state.app.pageLoading);
    // sideeffects
    useEffect(() => {
        // set the current active page
        dispatch(appRedux.actions.setPageMode('Home'));
    }, []); 
    // jsx content
    return (
       pageLoading ? <Loader/>
       :<Fragment>
           <TherapistLayout pageTitle='dashboard'>
                <MainContent>
                    {/* Therapist home component */}
                    <Home/>
                </MainContent>   
            </TherapistLayout>
        </Fragment>
    )
}

export default withAuth(withTherapistDashboard(index));
