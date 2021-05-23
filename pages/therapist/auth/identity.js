// dependency imports
import React, { Fragment, useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import dynamic from 'next/dynamic';
import {useRouter}  from 'next/router';
import * as appRedux from '../../../redux/application/index';
import * as therapistAuthRedux from '../../../redux/therapist/index';


// component imports
import TherapistLayout from '../../../layouts/TherapistLayout';
import LeftPane from '../../../components/Therapist/identity/leftpane/LeftPane';
import Rightpane from '../../../components/Therapist/identity/Rightpane/Rightpane';
import LoginComponent from '../../../components/Therapist/identity/Rightpane/LoginComponent/LoginComponent';
import Card from '../../../components/UI/Card/Card';
import Loader from '../../../components/UI/Loader/Loader';
import {withGuest} from '../../../components/Therapist/identity/HOC/WithGuest';

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
    const pageMode = useSelector(state => state.app.pageMode);
    const pageLoading = useSelector(state => state.app.pageLoading);
    const responseStatus = useSelector(state => state.app.responseStatus);
    const authAlertType = useSelector(state => state.therapistAuth.alertType);

    // page side effects
    useEffect(() => {
        // determines page mode
        if(!page){dispatch(appRedux.actions.setPageMode('sign-in'));}
        else{ 
            if(allowedPageModes.includes(page)){
                dispatch(appRedux.actions.setPageMode(page));
            }else{
                dispatch(appRedux.actions.setResponseStatus(404));
            }
        }

        // change pageMode based on auth alert type
        if(authAlertType){
            switch(authAlertType){
                case 'otp-sent':
                    pageModeDispatcher('activate-account');
                    break;
                case 'account-not-verified':
                    pageModeDispatcher('activate-account');
                    break;
                default:
                    break;
            }
        }

        // move to 404 page
        if(responseStatus && responseStatus === 404){
            router.replace('/404');
        }

    }, [page, authAlertType, responseStatus]);

    // toggles page mode
    const togglePageModehandler = async () => { 
         // clear any success or error message if exists first
         await dispatch(therapistAuthRedux.actions.setAuthError(''));

         // toggle page mode
        if(pageMode === 'sign-in'){
            pageModeDispatcher('sign-up');
        }else if(pageMode === 'sign-up'){
            pageModeDispatcher('sign-in');
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

    // page mode dispatcher
    const pageModeDispatcher = async (pageMode) => {
        await dispatch(appRedux.actions.setPageMode(pageMode));
        router.replace(`/therapist/auth/identity?page=${pageMode}`);
    }

    // jsx
    return (
        pageLoading ? <Loader/>
        :<Fragment>
            {/** Therapist base layout */}
            <TherapistLayout pageTitle='therapist identity'>
                <section className='therapist-auth--main'>
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
                                ?   <OTPVerificationComponent/>
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
