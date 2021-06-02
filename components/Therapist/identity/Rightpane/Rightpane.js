import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';
import Footer from '../../../UI/Footer/Footer';
import { useSelector } from 'react-redux';

// Therapist identity page: Right pane component
const Rightpane = ({children}) => {
    // states from store
    const settings = useSelector(state => state.app.settings)       // app sttings info

    return (
        <Fragment>
            <div className='therapist-auth--main-rightPane'>
                {/** Heading for small screen device  */}
                <div className='therapist-auth--main-rightPane-heading'>
                    <div className='therapist-auth--main-rightPane-heading-item-1'>
                        {settings && <Fragment>
                            <Image src={settings.app_logo} alt={settings.app_name} height='55' width='55' priority={true} quality='100'/>
                            <h3>{settings.app_name}</h3>
                        </Fragment>}
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
