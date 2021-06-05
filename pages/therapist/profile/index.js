// dependency imports
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as appRedux from '../../../redux/application/index'; 
import { useRouter } from 'next/router';
import {withAuth} from '../../../components/Therapist/identity/HOC/withAuth';
import {withTherapistDashboard} from '../../../components/Therapist/workArea/HOC/DashboardHoc';

// component imports
import TherapistLayout from '../../../layouts/TherapistLayout';
import MainContent from '../../../components/Therapist/workArea/MainContent/MainContent';
import Bio from '../../../components/Therapist/profile/Bio/Bio';

// Therapist profile details page
const index = () => {
    // dependency
    const dispatch = useDispatch();
    const router = useRouter();
    const {subject} = router.query;
    // locals state
    const allowedSubjects = ['bio', 'change-password'];
    // states from store
    const pageSubject = useSelector(state => state.app.subject);
    // sideeffects
    useEffect(() => {
        // sets the current active page
        dispatch(appRedux.actions.setPageMode('profile'));

        // select subjects for the page
        if(subject && allowedSubjects.includes(subject)){
            dispatch(appRedux.actions.setPageSubject(subject));   
        }
    }, [subject]);
    // jsx content
    return (
        <Fragment>
            <TherapistLayout pageTitle='profile'>
                <MainContent>
                    {pageSubject === 'bio' ? <Bio/>:''}
                </MainContent>
            </TherapistLayout>
        </Fragment>
    )
}

export default withAuth(withTherapistDashboard(index));
