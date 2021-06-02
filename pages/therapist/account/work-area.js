// dependency imports
import React, { Fragment } from 'react';
import {withAuth} from '../../../components/Therapist/identity/HOC/withAuth';

// component imports
import TherapistLayout from '../../../layouts/TherapistLayout';
import Dashboard from '../../../components/Application/Dashboard/Dashboard';


// therapist work area
const WorkArea = () => {
    return (
        <Fragment>
            <TherapistLayout pageTitle='work area'>
                <Dashboard>
                    
                </Dashboard>
            </TherapistLayout>
        </Fragment>
    )
}

export default withAuth(WorkArea);
