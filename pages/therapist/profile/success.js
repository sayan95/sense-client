// dependency imports
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

// component imports
import TherapistLayout from '../../../layouts/TherapistLayout';
import Button from '../../../components/UI/Button/Button';
import BigFooter from '../../../components/UI/BigFooter/BigFooter';

// profile create success page
const Success = () => {
    // states from store
    const settings = useSelector(state => state.app.settings);

    return (
        <Fragment>
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
                                <p>Thanks for joining us. We will cactch you soon.</p>
                                <Button color='primary'> Let's have look to your profile</Button>
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

export default Success;
