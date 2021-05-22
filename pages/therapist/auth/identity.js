// dependency imports
import React, { Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import dynamic from 'next/dynamic';
import {useRouter}  from 'next/router';
import * as appRedux from '../../../redux/application/index';


// component imports
import TherapistLayout from '../../../layouts/TherapistLayout';
import LeftPane from '../../../components/Therapist/identity/leftpane/LeftPane';
import Rightpane from '../../../components/Therapist/identity/Rightpane/Rightpane';
import LoginComponent from '../../../components/Therapist/identity/Rightpane/LoginComponent/LoginComponent';
import Card from '../../../components/UI/Card/Card';
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
    const allowedPageModes = ['sign-in', 'sign-up', 'activate-account'];

    // states from store
    const pageMode = useSelector(state => state.app.pageMode);
    const pageLoading = useSelector(state => state.app.pageLoading);
    const responseStatus = useSelector(state => state.app.responseStatus);

    // page side effects
    useEffect(() => {
        // decide the page modes
        dispatch(appRedux.actions.setPageLoading(true));
        dispatch(appRedux.actions.setPageMode('sign-in'));

        // set page mode
        if(page){
            if(allowedPageModes.includes(page)){ dispatch(appRedux.actions.setPageMode(page));}
            else{ dispatch(appRedux.actions.setResponseStatus(404));}
        }

        // chage page based on application response status
        if(responseStatus){
            responseStatus === 404 ? router.push('/404') : ''
        }

        dispatch(appRedux.actions.setPageLoading(false));
        
    }, [page, pageMode, responseStatus]);
    // toggles page mode
    const togglePageModehandler = () => {
        if(pageMode === 'sign-in'){ 
            dispatch(appRedux.actions.setPageMode('sign-up')); 
            router.push('/therapist/auth/identity?page=sign-up');
        }
        if(pageMode === 'sign-up'){ 
            dispatch(appRedux.actions.setPageMode('sign-in'));
            router.push('/therapist/auth/identity?page=sign-in');
        }
    }
    // initiate login process
    const loginActionHandler = (e) => { e.preventDefault();}

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
                                ?   <LoginComponent pageToggle={togglePageModehandler} loginAction={loginActionHandler}/>
                                :   pageMode === 'activate-account' 
                                ?   <OTPVerificationComponent/>
                                :   <SignupComponent pageToggle={togglePageModehandler}/> 
                            }
                        </Card>
                    </Rightpane>
                </section>
            </TherapistLayout>
        </Fragment>
    )
}


export default Identity;
