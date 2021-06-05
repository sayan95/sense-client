// dependency imports
import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import * as appRedux from '../../../../redux/application/index';
import * as therapistAuthRedux from '../../../../redux/therapist/index';

// component imports
import Dashboard from '../../../Application/Dashboard/Dashboard';

// HOC for dashboard component
export const withTherapistDashboard = (WrappedComponent) => {
    const DashboardWrapped = (props) => {
        //dependency
        const router = useRouter();
        const dispatch = useDispatch();
        // states from store
        const isLoggedIn = useSelector(state => state.therapistAuth.isLoggedIn);
        // sideeffects
        useEffect(() => {
            // takes to the login screen if not authenticated
            if(!isLoggedIn){
                dispatch(appRedux.actions.setPageLoading(true));
                router.push('/therapist/auth/identity?page=sign-in');
            }else{
                dispatch(appRedux.actions.setPageLoading(false));
            }
        }, [isLoggedIn]);
        // dashboard sidebar items
        const sidebarItems = [
            // item 1
            {subtitle: 'Account', subItems: [
                {title:'Home', isDropdown: false, dropdownItems:null, icon:'la-home', href:'/therapist/account'},
                {title:'Profile', isDropdown: true, icon:'la-user', href:'#', dropdownItems:[
                    {dropdownTitle:'Bio', href:'/therapist/profile?subject=bio'},
                    {dropdownTitle:'Password', href:'/therapist/profile?subject=change-password'},
                ]},
            ]}
        ];
        // logout handler
        const logouthandler = async () => {
            await dispatch(therapistAuthRedux.dispatchers.logoutTherapist());
        }
        // wrapeed jsx content
        return <Fragment>
                    <Dashboard sidebarItems={sidebarItems} logoutAction={logouthandler}>
                        <WrappedComponent {...props}/>
                    </Dashboard>
                </Fragment>
    } 
    return DashboardWrapped;
}