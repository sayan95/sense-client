// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// cpmponent imports
import LandingButton from '@components/UI/LandingUI/LandingButton/LandingButton';
import TextField from '@components/UI/TextField/TextField';

// sense landing : Contact us component
const ContactUs = ({id}) => {
    return (
        <Fragment>
            <div id={id} className='sense-main-contact'>
                <div className='section-header'>
                    <h3 className='main-heading'>Contact Us</h3>
                    <small className='sub-heading'>
                        Et harum quidem rerum facilis est et expedita distinctio 
                        nam libero tempore cum soluta nobis eligendi cumque.
                    </small>
                </div>
                <div className='sense-main-contact--body'>
                    <div className='contact-grid'>
                        <div className='contact-form'>
                            <form id='contact-us-form' action=''>
                                <div className='form-item'>
                                    <TextField type='text' name='user_name' placeholder='Enter your name' label='Name*'/>
                                </div>
                                <div className='form-item'>
                                    <TextField type='text' name='user_email' placeholder='Enter your email' label='Email*'/>
                                </div>
                                <div className='form-item'>
                                    <TextField isBigText name='user_message' placeholder='Enter your message' label='Message*' />
                                </div>
                                <div className='form-item'>
                                    <LandingButton type='submit' className='landing-button'>
                                        <span style={{ marginRight:'15px' }}>Send Message</span>
                                        <i style={{ fontSize: '20px' }} className='las la-paper-plane'></i>
                                    </LandingButton>
                                </div>
                            </form>
                        </div>
                        <div className='site-contact-details'>
                            <span><i className='las la-envelope'></i> : support@sense.com</span>
                            <span><i className='las la-link'></i> : www.sense.com</span>
                            <span><i className='las la-phone-volume'></i> : (+001) 123 456 7890</span>
                            <span><i className='las la-clock'></i> : 24x7</span>
                            <span><i className='las la-map-marker'></i> : 1644 Deer Ridge Drive Rochelle Park, NJ 07662</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

// props validation
ContactUs.propTypes = {
    id: PropTypes.string.isRequired
}

export default ContactUs
