// dependency imports 
import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';


// component imports
const Button = dynamic(() => import('../../../../UI/Button/Button'));
const CardBody = dynamic(() => import('../../../../UI/Card/CardBody'));
const CardFooter = dynamic(() => import('../../../../UI/Card/CardFooter'));
const CardHeader = dynamic(() => import('../../../../UI/Card/CardHeader'));
const TextField = dynamic(() => import('../../../../UI/TextField/TextField'));

// Therapist OTP verification component
const OTPVerificationComponent = ({back}) => {
    // local state
    const [timer, setTimer] = useState('3:00');                    // timer state

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
                    <h5 className='therapist-auth--otpverification-header'>
                        <p>Enter the otp sent to your email</p>
                    </h5>
                </CardHeader>
                <CardBody>
                    <TextField name='otp' type='text' placeholder='Enter OTP'  iconClass='las la-qrcode'/>
                    <Button isBlock={true} color='primary'>verify</Button>
                    <p className='therapist-auth--otpverification-timer'>
                        {
                            timer === '0:00' 
                            ?<span>Not recieved OTP yet ? <a onClick={resendOTPEvent} className='text-blue-500 cursor-pointer'>Resend OTP</a></span>
                            :<span>Resend OTP in {timer} </span>
                        }
                    </p>
                </CardBody>
                <CardFooter>
                    <p className='therapist-auth--otpverification-links'>
                        <i className='las la-arrow-left'></i>
                        <span>
                            <a href='/therapist/auth/identity?page=sign-in'>Back to sign in</a>
                        </span>
                    </p>
                    <p className='therapist-auth--otpverification-links'>
                        Having trouble in OTP recieving ? <a href='#'>let us know</a> 
                    </p>
                </CardFooter>
            </div>
        </Fragment>
    )
}

// props validation
OTPVerificationComponent.propTypes = {
    back: PropTypes.func.isRequired
}

export default OTPVerificationComponent
