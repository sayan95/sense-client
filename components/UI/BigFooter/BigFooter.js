// @ts-nocheck
// dependency imports
import React, { Fragment } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// Bigfooter component
const BigFooter = props => {
    // states from store
    const settings = useSelector(state => state.app.settings);

    // jsx content
    return (
        <Fragment>
            <div className='sense-main-bigfooter'>
                {/* Site footer content here */}
                <div className='inner-content'>
                    <div className='inner-content-row'>
                        {/* Left section */}
                        <div className='inner-left-content'>
                            <div className='heading'>
                            {settings && 
                                <Fragment>
                                    <Image src={settings.app_logo} alt={settings.app_name} height='40' width='40' quality='100' priority/>
                                    <h2>{settings.app_name}</h2>
                                </Fragment>
                            }
                        </div>
                            <div className='body'>
                                <p>
                                    Cras ultricies mi eu turpis sit hendrerit fringilla 
                                    vestibulum ante ipsum primis in faucibus ultrices 
                                    posuere cubilia.
                                </p>
                            </div>
                            <div className='footer'>
                                <a href='#' className='social-link'><i className='lab la-facebook-f'></i></a>
                                <a href='#' className='social-link'><i className='lab la-twitter'></i></a>
                                <a href='#' className='social-link'><i className='lab la-instagram'></i></a>
                                <a href='#' className='social-link'><i className='lab la-linkedin-in'></i></a>
                            </div>
                        </div>

                        {/* right section */}
                        <div className='inner-right-content'>
                            {/* Columns */}
                            <div className='column column-1'>
                                <div className='heading'>
                                    <h3>About Us</h3>
                                </div>
                                <div className='page-link-list-container'>
                                <ul className='page-list'>
                                    <li className='page-list-item'>
                                        <a href='#' className='page-list-item-link'>Works</a>
                                    </li>
                                    <li className='page-list-item'>
                                        <a href='#' className='page-list-item-link'>Strategy</a>
                                    </li>
                                    <li className='page-list-item'>
                                        <a href='#' className='page-list-item-link'>Releases</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            <div className='column column-2'>
                                <div className='heading'>
                                    <h3>Customers</h3>
                                </div>
                                <div className='page-link-list-container'>
                                <ul className='page-list'>
                                    <li className='page-list-item'>
                                        <a href='#' className='page-list-item-link'>Works</a>
                                    </li>
                                    <li className='page-list-item'>
                                        <a href='#' className='page-list-item-link'>Strategy</a>
                                    </li>
                                    <li className='page-list-item'>
                                        <a href='#' className='page-list-item-link'>Releases</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            <div className='column column-3'>
                                <div className='heading'>
                                    <h3>Support</h3>
                                </div>
                                <div className='page-link-list-container'>
                                <ul className='page-list'>
                                    <li className='page-list-item'>
                                        <a href='#' className='page-list-item-link'>Works</a>
                                    </li>
                                    <li className='page-list-item'>
                                        <a href='#' className='page-list-item-link'>Strategy</a>
                                    </li>
                                    <li className='page-list-item'>
                                        <a href='#' className='page-list-item-link'>Releases</a>
                                    </li>
                                </ul>
                            </div>
                            </div>  
                        </div>
                    </div>    
                </div>
            </div>
            
            {/* App copyright section */}
            <div className='copyright-section'>
                <p>Copyright © 2021 Sense, Inc. All rights reserved.</p>
            </div>
        </Fragment>
    )
}

// Props validation
BigFooter.propTypes = {

}

export default BigFooter
