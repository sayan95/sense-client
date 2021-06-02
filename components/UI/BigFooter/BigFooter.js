// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useSelector } from 'react-redux';

// Bigfooter component
const BigFooter = props => {
    // states from store
    const settings = useSelector(state => state.app.settings);

    return (
        <Fragment>
            <div className='big-footer'>
               <div className='primary-content'>
                <div className='grid-container'>
                    <div className='col col-1'>
                        <div className='barnd-holder'>
                            <div className='main-heading'>
                                {settings && <>
                                    <Image src={settings.app_logo} alt={settings.app_name} height='65' width='65' priority={true} quality='100'/>
                                    <h3>{settings.app_name}</h3>
                                </>}
                            </div>
                            <div className='sub-heading'>
                                <h6>Bringing mental health to all</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col col-2'>
                        <div className='services'>
                            <h6>Our services</h6>
                            <ul>
                                <li><a href='#'>Digital marketing</a></li>
                                <li><a href='#'>SEO</a></li>
                                <li><a href='#'>Web Design</a></li>
                                <li><a href='#'>Template Design</a></li>
                            </ul>
                        </div>
                        <div className='quick-links'>
                            <h6>Quick links</h6>
                            <ul>
                                <li><a href='#'>Digital marketing</a></li>
                                <li><a href='#'>SEO</a></li>
                                <li><a href='#'>Web Design</a></li>
                                <li><a href='#'>Template Design</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col col-3'>
                        <Image src='/assets/svgs/walking-outside.svg' alt='sense' height='100' width='150' quality='100' priority={true}/>
                    </div>
                </div>
               </div>
            </div>
        </Fragment>
    )
}

// Props validation
BigFooter.propTypes = {

}

export default BigFooter
