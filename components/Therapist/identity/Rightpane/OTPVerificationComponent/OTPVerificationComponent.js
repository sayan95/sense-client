// dependency imports 
import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';


import { useSelector } from 'react-redux';
import Alert from '../../../../UI/Alert/Alert';


// component imports
const Button = dynamic(() => import('../../../../UI/Button/Button'));
const CardBody = dynamic(() => import('../../../../UI/Card/CardBody'));
const CardFooter = dynamic(() => import('../../../../UI/Card/CardFooter'));
const CardHeader = dynamic(() => import('../../../../UI/Card/CardHeader'));
const TextField = dynamic(() => import('../../../../UI/TextField/TextField'));

// Therapist OTP verification component
const OTPVerificationComponent = ({verficationAction, inputChangeAction, resendOTPAction}) => {
    // local state
    const [timer, setTimer] = useState('3:00');                  // timer state

    // states from store
    const error = useSelector(state => state.therapistAuth.error);
    const success = useSelector(state => state.therapistAuth.success);
    const alertType = useSelector(state => state.therapistAuth.alertType);

    // side effects
    useEffect(() => {
        let threeMinuite = 60*3;
        if( timer === '3:00'){
            countDown(threeMinuite);
        }
    }, []);

    // resend otp timer
    const countDown = (duration) => {
        let time = duration, minutes, seconds;
        let timerInterval = setInterval(()=>{
            minutes = parseInt(time / 60, 10);
            seconds = parseInt(time % 60, 10);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            setTimer(minutes + ":" + seconds);
            if (--time < 0) {
                clearInterval(timerInterval)
            }
        }, 1000);
    }

    // jsx content
    return (
        <Fragment>  
            <div className='therapist-auth--otpverification animate__animated animate__fadeInRight animate__faster'>
                <CardHeader>
                    {/* show info alert about the verfication status */}
                    {alertType && alertType === 'account-not-verified'
                    ? <Alert type='primary' content={error} />
                    : alertType && alertType === 'otp-timeout'
                    ? <Alert type='primary' content={error}/>
                    : alertType && alertType === 'invalid-attempter'
                    ? <Alert type='primary' content={error}/>
                    :  alertType && alertType === 'otp-resend'
                    ?  <Alert type='success' content={success}/>
                    : ''
                    }
                </CardHeader>
                <CardBody>
                    {alertType !== 'invalid-attempter' ?
                        <h5 className='therapist-auth--otpverification-header'>
                            <p>Enter the otp sent to your email</p>
                        </h5>:''
                    }
                    {/** verification form  */}
                    <form onSubmit={verficationAction} method='POST'>
                        <TextField name='otp' type='text' placeholder='Enter OTP' 
                            event={inputChangeAction} iconClass='las la-qrcode' 
                            error={error && alertType === 'otp-mismatch' ? error: ''}
                        />
                        <Button type='submit' isBlock={true} color='primary'>verify</Button>
                    </form>

                    {/* resend otp link and timer */}
                    <p className='therapist-auth--otpverification-timer'>
                        {
                            alertType && alertType === 'otp-timeout' || alertType === 'otp-resend'
                            ?<span> <a href="#" onClick={resendOTPAction} className='text-blue-500 cursor-pointer'>Resend OTP</a></span>
                            : alertType && alertType === 'invalid-attempter'
                            ?  ''
                            : timer === '0:00' 
                            ?<span>Not recieved OTP yet ? <a href="#" onClick={resendOTPAction} className='text-blue-500 cursor-pointer'>Resend OTP</a></span>
                            : <span>Resend OTP in {timer} </span>
                        }
                    </p>
                </CardBody>
                <CardFooter>
                    {/* some important links  */}
                    <p className='therapist-auth--otpverification-links'>
                        <i className='las la-arrow-left'></i>
                        <span>
                            <a href='/therapist/auth/identity?page=sign-in' className='text-blue-500'>Back to sign in</a>
                        </span>
                    </p>
                    <p className='therapist-auth--otpverification-links'>
                        Having trouble in OTP recieving ? <a href='#' className='text-blue-500'>let us know</a> 
                    </p>
                </CardFooter>
            </div>
        </Fragment>
    )
}

// props validation
OTPVerificationComponent.propTypes = {
    verficationAction: PropTypes.func.isRequired,
    inputChangeAction: PropTypes.func.isRequired,
    resendOTPAction : PropTypes.func.isRequired
}

export default OTPVerificationComponent
