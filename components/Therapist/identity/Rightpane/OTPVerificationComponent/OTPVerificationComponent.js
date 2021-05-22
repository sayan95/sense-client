// dependency imports 
import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

// component imports
const CardHeader = dynamic(() => import('../../../../UI/Card/CardHeader'));
const CardBody = dynamic(() => import('../../../../UI/Card/CardBody'));
const Alert = dynamic(() => import('../../../../UI/Alert/Alert'));

// Therapist OTP verification component
const OTPVerificationComponent = () => {
    return (
        <Fragment>  
            <div className='therapist-auth--otpverification'>
                <CardHeader>
                    <Alert />
                </CardHeader>
                <CardBody>
                    This is the card body
                </CardBody>
            </div>
        </Fragment>
    )
}

// props validation
OTPVerificationComponent.propTypes = {
 // 
}

export default OTPVerificationComponent
