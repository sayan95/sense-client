// dependency imports
// dependency imports
import React, { Fragment, useState } from 'react';
import {useSelector} from 'react-redux';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PropTypes from 'prop-types';

// component imports
import TextField from '../../../../UI/TextField/TextField';
import CheckBox from '../../../../UI/CheckBox/CheckBox';
import Button from '../../../../UI/Button/Button';

// dynamic component imports
const CardHeader = dynamic(() => import('../../../../UI/Card/CardHeader'));
const CardBody = dynamic(() => import('../../../../UI/Card/CardBody'));
const CardFooter = dynamic(() => import('../../../../UI/Card/CardFooter'));

// Therapist auth: Signup component
const SignupComponent = ({pageToggle, signupAction, inputChangeAction}) => {
    // static content item 
    const TnCLabel = <>Accept our <a href='#'>Terms</a> & <a href='#'>Condition</a></>;
    // local state
    const [signupDisabled, setsignupDisabled] = useState(true);
    // states from store
    const errors = useSelector(state => state.therapistAuth.error); 

    // jsx content
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
                        <TextField name='email' event={inputChangeAction} type='text' placeholder='Enter email' iconClass='las la-envelope' error={errors && errors.email ? errors.email : ''}/>
                        <TextField name='password' event={inputChangeAction} type='password' placeholder='Enter password' iconClass='las la-key' error={errors && errors.password ? errors.password[0] : ''}/>
                        <TextField name='password_confirmation' event={inputChangeAction} type='password' placeholder='Confirm password' iconClass='las la-key' error={errors && errors.password_confirmation ? errors.password_confirmation: ''}/>
                        <CheckBox name='accept' label={TnCLabel} event={()=> {setsignupDisabled(!signupDisabled)}}/> 
                        <Button disabled={signupDisabled} type='submit' isBlock={true} color='primary' event={signupAction}>Sign up</Button>
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
    pageToggle: PropTypes.func.isRequired,
    signupAction: PropTypes.func.isRequired,
    inputChangeAction: PropTypes.func.isRequired
}

export default SignupComponent
