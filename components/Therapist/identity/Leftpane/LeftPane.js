import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

// component imports
import Image from 'next/image';


// therapist identity: Left pane component
const LeftPane = () => {
    // gets the app settings infos
    const settings = useSelector(state => state.app.settings);

    return (
        <Fragment>
            <div className='therapist-auth--main-leftPane'>
                <div className='therapist-auth--main-leftPane-nav'>
                    <div className='therapist-auth--main-leftPane-nav-item-1'>
                        <Image src={!settings ? '/assets/logo/sense_logo.png' : settings.app_logo } alt='sense-therapy-logo' height='20' width='40' priority={true} quality='100'/>
                        <h3>
                            <span style={{ textTransform:'capitalize' }}>{settings && settings.app_name}</span>
                            <span>T</span>
                            <span>herapy</span>
                        </h3>
                    </div>
                    <span className='therapist-auth--main-leftPane-nav-item-2'>Bringing mental health to all</span>
                </div>
                <div className='therapist-auth--main-leftPane-imageContainer'>
                    <Image src='/assets/svgs/signup.svg' alt='sense-auth' width='100' height='100' priority={true} quality='100' className='img-box'/>
                </div>
            </div>
        </Fragment>
    )
}

// props validation 
LeftPane.defaultProps = {
    //
}

export default LeftPane;
