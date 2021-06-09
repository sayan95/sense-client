// dependency imports
import React, { Fragment, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import * as appRedux from '../../../redux/application/index';
import {withAuth} from '../../../components/Therapist/identity/HOC/withAuth';

// component imports
import TherapistLayout from '../../../layouts/TherapistLayout';
import Button from '../../../components/UI/Button/Button';
import BigFooter from '../../../components/UI/BigFooter/BigFooter';
import Loader from '../../../components/UI/Loader/Loader';

// profile create success page
const Success = () => {
    // dependencies
    const dispatch = useDispatch();

    // states from store
    const pageLoading = useSelector(state => state.app.pageLoading);
    const settings = useSelector(state => state.app.settings);
    const success = useSelector(state => state.therapistAuth.success);

    useEffect(() => {
        dispatch(appRedux.actions.setPageLoading(false));
    }, [])

    return (
        pageLoading ? <Loader/>
        :<Fragment>
            <TherapistLayout pageTitle='proofile create success'>
                <section className='therapist-profile-create-success--container'>
                    {/* main content */}
                    <div className='main-content'>
                        <div className='col'>
                            <div className='image-container'>
                                <div className='brand-holder'>
                                    {settings && <>
                                        <Image src={settings.app_logo} alt={settings.app_name} height='' width='' quality='100' priority={true}/>
                                        <h3>{settings.app_name}</h3>
                                    </>}
                                </div>
                                <Image src='/assets/svgs/success.svg' alt='therapist-profile-create-success' height='350' width='350' priority={true} quality='100'/>
                            </div>
                            <div className='message-container'>
                                <h3>Nice! You are done</h3>
                                <p>{success ? success : 'Thanks for joining us. We will cacth you soon :)'}</p>
                                <Link href='/therapist/profile?subject=bio'>
                                    <a>
                                    <Button color='primary'> Let's have look to your profile</Button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* footer */}
                    <BigFooter/>
                </section>
            </TherapistLayout>
        </Fragment>
    )
}

export default withAuth(Success);
