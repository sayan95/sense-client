// dependency imports
import React, { Fragment, useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import dynamic from 'next/dynamic';
import {useRouter}  from 'next/router';
import {useToasts} from 'react-toast-notifications';
import * as appRedux from '../../../redux/application/index';
import * as therapistAuthRedux from '../../../redux/therapist/index';


// component imports
import TherapistLayout from '../../../layouts/TherapistLayout';
import LeftPane from '../../../components/Therapist/identity/leftpane/LeftPane';
import Rightpane from '../../../components/Therapist/identity/Rightpane/Rightpane';
import LoginComponent from '../../../components/Therapist/identity/Rightpane/LoginComponent/LoginComponent';
import Card from '../../../components/UI/Card/Card';
import {withGuest} from '../../../components/Therapist/identity/HOC/WithGuest';
import Progressbar from '../../../components/UI/Progressbar/Progressbar';
import Loader from '../../../components/UI/Loader/Loader';

// dynamic component loads
const SignupComponent = dynamic(() => import('../../../components/Therapist/identity/Rightpane/SignupComponent/SignupComponent'))
const OTPVerificationComponent = dynamic(() => import('../../../components/Therapist/identity/Rightpane/OTPVerificationComponent/OTPVerificationComponent'));



// therapist auth page
const Identity = () => {
    // dependencies
    const router = useRouter();
    const { page } = router.query;
    const dispatch = useDispatch();

    // local states
    const allowedPageModes = ['sign-in', 'sign-up', 'activate-account'];        // page mode white list
    const [authForm, setAuthForm] = useState({                                 //  auth form fields
        email : '',     
        password:'',
        password_confirmation: '',
        remember_me: false,
        otp:'' 
    });

    // states from store
    const user = useSelector(state => state.therapistAuth.user);
    const isLoading = useSelector(state => state.therapistAuth.loading);
    const isLoggedIn = useSelector(state => state.therapistAuth.isLoggedIn); 
    const pageMode = useSelector(state => state.app.pageMode);
    const pageLoading = useSelector(state => state.app.pageLoading);
    const responseStatus = useSelector(state => state.app.responseStatus);
    const authAlertType = useSelector(state => state.therapistAuth.alertType);
    const error = useSelector(state => state.therapistAuth.error);

    // page side effects
    useEffect(() => {
        // determines page mode
        dispatch(appRedux.actions.setPageMode('sign-in'));
        // determine page mode based on current page
        if(page){
            if(allowedPageModes.includes(page)){
                dispatch(appRedux.actions.setPageMode(page));
            }else{
                dispatch(appRedux.actions.setResponseStatus(404));
            }
        }
        // set page mode based on alert types
        if(authAlertType){
            switch(authAlertType){
                case 'otp-sent':
                    router.replace('/therapist/auth/identity?page=activate-account');
                    break;
                case 'account-not-verified':
                    router.replace('/therapist/auth/identity?page=activate-account');
                    break;
                case 'invalid-attempter':
                    setAuthForm({});
                    router.replace('/therapist/auth/identity?page=sign-in');
                    break;
                default:
                    break;
            }
        }
        //if userLogged in 
        if(isLoggedIn){
            dispatch(appRedux.actions.setPageLoading(true));
            if(!user.account_status.profile_created){
                router.push(`/therapist/profile/create?email=${user.email}`);
            }else{
                router.push('/therapist/profile?subject=bio');
            }
        }else{
            dispatch(appRedux.actions.setPageLoading(false));
        }
    
        // toggle page to 404
        if(responseStatus && responseStatus === 404){
            router.replace('/404');
        }
    }, [page, error, authAlertType, isLoggedIn, responseStatus]);

    // toggles page mode
    const togglePageModehandler = async () => { 
        // clear any success or error message if exists first
        await dispatch(therapistAuthRedux.actions.setAuthError('')); 
        dispatch(appRedux.actions.setPageMode('sign-in'));

        if(pageMode === 'sign-in'){
            dispatch(appRedux.actions.setPageMode('sign-up'));
            router.replace('/therapist/auth/identity?page=sign-up');
        }else{
            dispatch(appRedux.actions.setPageMode('sign-in'));
            router.replace('/therapist/auth/identity?page=sign-in');
        }
    }

    // auth form input change handler
    const inputChangeHandler = (e) => {
        if(e.target.name === 'remember_me'){
            setAuthForm({
                ...authForm,
                [e.target.name] : e.target.checked
            });
        }else{
            setAuthForm({
                ...authForm,
                [e.target.name] : e.target.value
            });
        }   
    }

    // initiate login process
    const loginActionHandler = async (e) => { 
        e.preventDefault(); 
        await dispatch(therapistAuthRedux.dispatchers.loginTherapist(authForm));
    }

    // therapist registration handler
    const signupHandler = async (e) => {
        e.preventDefault();
        await dispatch(therapistAuthRedux.dispatchers.registerTherapist(authForm));
    }

    // otp verfication handler
    const otpVerificationHandler = async(e) => {
        e.preventDefault();
        await dispatch(therapistAuthRedux.dispatchers.otpverification(authForm))
    }

    // resend otp mail handler
    const resendOTPHandler = async (e) => {
        await dispatch(therapistAuthRedux.dispatchers.resendOTP());
    }

    // jsx
    return (
        pageLoading ? <Loader/>
        :<Fragment>
            {/** Therapist base layout */}
            <TherapistLayout pageTitle='therapist identity'>
                <section className='therapist-auth--main'>
                    {isLoading && <Progressbar/>}
                    {/** Left pane component */}
                    <LeftPane/>
                    {/** Right pane component */}
                    <Rightpane>
                        <Card border={true}>
                            {   pageMode === 'sign-in' 
                                ?   <LoginComponent pageToggle={togglePageModehandler} 
                                        loginAction={loginActionHandler}
                                        inputChangeAction={inputChangeHandler}
                                    />
                                :   pageMode === 'activate-account'
                                ?   <OTPVerificationComponent verficationAction={otpVerificationHandler}
                                            inputChangeAction={inputChangeHandler}
                                            resendOTPAction={resendOTPHandler}
                                    />
                                :   <SignupComponent pageToggle={togglePageModehandler} 
                                        signupAction={signupHandler} 
                                        inputChangeAction={inputChangeHandler} 
                                    />
                            }
                        </Card>
                    </Rightpane>
                </section>
            </TherapistLayout>
        </Fragment>
    )
}


export default withGuest(Identity);
