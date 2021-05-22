// dependency imports
import React, { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PropTypes from 'prop-types';
import TextField from '../../../../UI/TextField/TextField';
import CheckBox from '../../../../UI/CheckBox/CheckBox';
import Button from '../../../../UI/Button/Button';

const CardHeader = dynamic(() => import('../../../../UI/Card/CardHeader'));
const CardBody = dynamic(() => import('../../../../UI/Card/CardBody'));
const CardFooter = dynamic(() => import('../../../../UI/Card/CardFooter'));

// Therapist auth: Signup component
const SignupComponent = ({pageToggle}) => {
    const TnCLabel = <>Accept our <a href='#'>Terms</a> & <a href='#'>Condition</a></>;
    
    // local state
    const [signupDisabled, setsignupDisabled] = useState(true);

    return (
        <Fragment>
            <div className='therapist-auth--signup animate__animated animate__fadeInRight animate__faster'>
                {/** Headings */}
                <CardHeader>
                    <h3 className='therapist-auth--signup-heading'>
                        <span>Join us</span>
                        <Image src='/assets/svgs/leaf.svg' alt='sens-login' height='30' width='30' priority='1' quality='100' />
                    </h3>
                </CardHeader>

                {/** Body */}
                <CardBody>
                    {/** Signup form */}
                    <form method='POST'>
                        <TextField name='email' type='text' placeholder='Enter email' iconClass='las la-envelope'/>
                        <TextField name='password' type='password' placeholder='Enter password' iconClass='las la-key'/>
                        <TextField name='password_confirmation' type='password' placeholder='Confirm password' iconClass='las la-key'/>
                        <CheckBox name='accept' label={TnCLabel} event={()=> {setsignupDisabled(!signupDisabled)}}/> 
                        <Button disabled={signupDisabled} type='submit' isBlock={true} color='primary'>Sign up</Button>
                    </form>
                </CardBody>

                {/** Footer */}
                <CardFooter>
                    <p className='therapist-auth--signup-footer-item-1'>Already have an account? <a href='#' onClick={pageToggle}>Log in</a></p>
                </CardFooter>
            </div>
        </Fragment>
    )
}

// props validation
SignupComponent.propTypes = {
    pageToggle: PropTypes.func.isRequired
}

export default SignupComponent
