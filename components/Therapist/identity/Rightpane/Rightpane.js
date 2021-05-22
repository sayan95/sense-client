import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';
import Footer from '../../../UI/Footer/Footer';

// Therapist identity page: Right pane component
const Rightpane = ({children}) => {
    return (
        <Fragment>
            <div className='therapist-auth--main-rightPane'>
                {/** Heading for small screen device  */}
                <div className='therapist-auth--main-rightPane-heading'>
                    <div className='therapist-auth--main-rightPane-heading-item-1'>
                        <Image src='/assets/logo/sense_logo.png' alt='sense-therapy-logo' height='20' width='40' priority={true} quality='100'/>
                        <h3>
                            <span>Sense</span>
                            <span>T</span>
                            <span>herapy</span>
                        </h3>
                    </div>
                    <p className='therapist-auth--main-rightPane-heading-item-2'>Bringing mental health to all</p>
                </div>

                {/** main content */}
                {children}
                
                {/** footer */}
                <Footer/>
            </div>
        </Fragment>
    )
}

// props validation
Rightpane.propTypes = {
    //
}
export default Rightpane
