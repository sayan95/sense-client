// dependency imports
import React, { Fragment } from 'react';
import {withAuth} from '../../../components/Therapist/identity/HOC/withAuth';

// component imports
import TherapistLayout from '../../../layouts/TherapistLayout';
import Dashboard from '../../../components/Application/Dashboard/Dashboard';


// therapist work area
const WorkArea = () => {
    // dashboard sidebar items
    const sidebarItems = [
        // item 1
        {subtitle: 'Account', subItems: [
            {title:'Home', isDropdown: false, dropdownItems:null, icon:'la-home', href:'#'},
            {title:'Profile', isDropdown: true, icon:'la-user', href:'#', dropdownItems:[
                {dropdownTitle:'Bio', href:'#'},
                {dropdownTitle:'Password', href:'#'},
            ]},
        ]}
    ];

    return (
        <Fragment>
            <TherapistLayout pageTitle='work area'>
                <Dashboard sidebarItems={sidebarItems}>
                    This is therapist main 
                </Dashboard>
            </TherapistLayout>
        </Fragment>
    )
}

export default withAuth(WorkArea);
